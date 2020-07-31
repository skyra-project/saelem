import HoroscopeEntry from '@lib/entry';
import { getRedisCache, redisClient } from '@redis/client';
import type { RedisStructure } from '@redis/RedisTypes';
import { constants } from '@skyra/timestamp';
import type days from '@utils/days';
import type sunsigns from '@utils/sunsigns';
import { toTitleCase } from '@utils/utils';
import { load as cheerio } from 'cheerio';
import fetch, { RequestInit } from 'node-fetch';

export default class HoroscopeService {
	#baseSeletor = '.sign-hero__horoscope-wrapper > .day-tabs-content--sign-page';
	#fetchOptions: RequestInit = {
		headers: {
			accept: '*/*',
			'accept-encoding': 'gzip, deflate, br',
			'accept-language': 'en-US,en;q=0.9,de;q=0.8',
			'cache-control': 'no-cache',
			dnt: '1',
			pragma: 'no-cache',
			referrer: 'https://astrology.tv/horoscope/signs',
			'upgrade-insecure-requests': '1',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
		}
	};

	public async find(sunsign: keyof typeof sunsigns, day: keyof typeof days): Promise<HoroscopeEntry> {
		// Get the parsed data of for the given date string
		const { modifiedDate, dateCacheKey, daySelector } = this.getDateData(day);

		// Get the cache entry for that day
		const cachedDate = await getRedisCache(dateCacheKey);

		if (cachedDate) {
			// If the day has a cached entry then get the entry for that sunsign
			const redisCache = JSON.parse(cachedDate) as RedisStructure;
			const cachedHoroscope = redisCache[sunsign];

			// If the sunsign was cached then return it
			if (cachedHoroscope) return HoroscopeEntry.generateFromCache(cachedHoroscope);
		}

		let horoscopeQueryable: ReturnType<typeof cheerio>;
		try {
			// Request the page for this horoscope
			const horoscopeResp = await fetch(`https://astrology.tv/horoscope/signs/${sunsign}`, this.#fetchOptions);

			// If the request was not ok then throw to catch
			if (!horoscopeResp.ok) throw '💥';

			const text = await horoscopeResp.text();
			// Parse the raw body with cheerio
			horoscopeQueryable = cheerio(text);
		} catch {
			throw new Error('An error occurred getting data from astrology.tv');
		}

		try {
			const horoscopeEntry = new HoroscopeEntry()
				.setDate(modifiedDate)
				.setPrediction(horoscopeQueryable(`${daySelector} > .day-tabs-content_horoscope`).text())
				.setIntensity(horoscopeQueryable(`${daySelector} > .daily-tabs-content__intensity`).text().split('Intensity:\u00A0')[1])
				.setMood(toTitleCase(horoscopeQueryable(`${daySelector} > .daily-tabs-content__mood`).text().split('Mood:\u00A0')[1]))
				.setKeywords(
					horoscopeQueryable(`${daySelector} > .daily-tabs-content__keywords`)
						.text()
						.split('Keywords:\u00A0')
						.slice(1)
						.join('')
						.split(', ')
						.map(toTitleCase)
				)
				.setRating(horoscopeQueryable(`${daySelector} > .daily-tabs-content__rating #FontAwesomeicon-star`).length);

			let redisCache: RedisStructure = {};
			if (cachedDate) redisCache = JSON.parse(cachedDate);

			redisCache[sunsign] = HoroscopeEntry.convertToCacheEntry(horoscopeEntry);
			redisClient.setex(dateCacheKey, (constants.day * 2) / 1000, JSON.stringify(redisCache));

			return horoscopeEntry;
		} catch (error) {
			throw new Error(error);
		}
	}

	private getDateData(day: keyof typeof days): DateData {
		switch (day) {
			case 'today': {
				const today = new Date(Date.now());
				return {
					dateCacheKey: today.setHours(0, 0, 0, 0).toString(),
					modifiedDate: today,
					daySelector: `${this.#baseSeletor} > div:nth-child(2)`
				};
			}
			case 'tomorrow': {
				const tomorrow = new Date(Date.now() + constants.day);
				return {
					dateCacheKey: tomorrow.setHours(0, 0, 0, 0).toString(),
					modifiedDate: tomorrow,
					daySelector: `${this.#baseSeletor} > div:nth-child(3)`
				};
			}
			case 'yesterday': {
				const yesterday = new Date(Date.now() - constants.day);
				return {
					dateCacheKey: yesterday.setHours(0, 0, 0, 0).toString(),
					modifiedDate: yesterday,
					daySelector: `${this.#baseSeletor} > div:nth-child(1)`
				};
			}
		}
	}
}

interface DateData {
	dateCacheKey: string;
	daySelector: string;
	modifiedDate: Date;
}
