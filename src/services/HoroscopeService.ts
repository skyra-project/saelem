import { constants } from '@klasa/timestamp';
import { load as cheerio } from 'cheerio';
import fetch, { RequestInit } from 'node-fetch';
import HoroscopeEntry from '../structures/HoroscopeEntry';
import type days from '../utils/days';
import type sunsigns from '../utils/sunsigns';
import { toTitleCase } from '../utils/utils';

export default class HoroscopeService {
	#baseSeletor = '.sign-hero__horoscope-wrapper > .day-tabs-content--sign-page';
	#fetchOptions: RequestInit = {
		headers: {
			':authority': 'astrology.tv',
			':method': 'GET',
			':path': '',
			':scheme:': 'https',
			accept: '*/*',
			'accept-encoding': 'gzip, deflate, br',
			'accept-language': 'en-US,en;q=0.9,nl;q=0.8',
			'cache-control': 'no-cache',
			dnt: '1',
			pragma: 'no-cache',
			referrer: 'https://astrology.tv/horoscope/signs',
			'upgrade-insecure-requests': '1',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
		}
	};

	public async find(sunsign: keyof typeof sunsigns, day: keyof typeof days, requestedFields: Set<keyof HoroscopeEntry>): Promise<HoroscopeEntry> {
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
			throw new Error('An error occurred getting data from theastrologer.com');
		}

		const daySelector =
			day === 'today'
				? `${this.#baseSeletor} > div:nth-child(2)`
				: day === 'tomorrow'
				? `${this.#baseSeletor} > div:nth-child(3)`
				: `${this.#baseSeletor} > div:nth-child(1)`;

		try {
			const horoscopeEntry = new HoroscopeEntry();

			if (requestedFields.has('date')) {
				horoscopeEntry.date =
					day === 'today'
						? new Date(Date.now())
						: day === 'tomorrow'
						? new Date(Date.now() + constants.DAY)
						: new Date(Date.now() - constants.DAY);
			}

			if (requestedFields.has('prediction')) {
				horoscopeEntry.prediction = horoscopeQueryable(`${daySelector} > .day-tabs-content_horoscope`).text();
			}

			if (requestedFields.has('intensity')) {
				horoscopeEntry.intensity = horoscopeQueryable(`${daySelector} > .daily-tabs-content__intensity`).text().split('Intensity:\u00A0')[1];
			}

			if (requestedFields.has('mood')) {
				horoscopeEntry.mood = toTitleCase(horoscopeQueryable(`${daySelector} > .daily-tabs-content__mood`).text().split('Mood:\u00A0')[1]);
			}

			if (requestedFields.has('keywords')) {
				horoscopeEntry.keywords = horoscopeQueryable(`${daySelector} > .daily-tabs-content__keywords`)
					.text()
					.split('Keywords:\u00A0')
					.slice(1)
					.map(toTitleCase);
			}

			if (requestedFields.has('rating')) {
				horoscopeEntry.rating = horoscopeQueryable(`${daySelector} > .daily-tabs-content__rating #FontAwesomeicon-star`).length;
			}

			return horoscopeEntry;
		} catch (error) {
			throw new Error(error);
		}
	}
}
