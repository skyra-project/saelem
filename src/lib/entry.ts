import type { RedisEntry } from '#redis/RedisTypes';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'The horoscope data on a specific star sign' })
export default class HoroscopeEntry {
	@Field(() => Date, { description: 'The date for the prediction in milliseconds since UNIX epoch' })
	protected date!: Date;

	@Field(() => String, { description: 'The horoscope prediction' })
	protected prediction!: string;

	@Field(() => String, { description: 'The intensity of the prediction' })
	protected intensity!: string;

	@Field(() => String, { description: 'The mood for the prediction' })
	protected mood!: string;

	@Field(() => [String], { description: 'Keywords for this prediction' })
	protected keywords!: string[];

	@Field(() => Int, { description: 'The rating for the prediction, this is a number between 0 and 5 inclusive' })
	protected rating!: number;

	public setDate(date: HoroscopeEntry['date']) {
		this.date = date;
		return this;
	}

	public setPrediction(prediction: HoroscopeEntry['prediction']) {
		this.prediction = prediction;
		return this;
	}

	public setIntensity(intensity: HoroscopeEntry['intensity']) {
		this.intensity = intensity;
		return this;
	}

	public setMood(mood: HoroscopeEntry['mood']) {
		this.mood = mood;
		return this;
	}

	public setKeywords(keywords: HoroscopeEntry['keywords']) {
		this.keywords = keywords;
		return this;
	}

	public setRating(rating: HoroscopeEntry['rating']) {
		this.rating = rating;
		return this;
	}

	public static convertToCacheEntry(data: HoroscopeEntry): RedisEntry {
		return {
			date: data.date,
			intensity: data.intensity,
			keywords: data.keywords,
			mood: data.mood,
			prediction: data.prediction,
			rating: data.rating
		};
	}

	public static generateFromCache(data: RedisEntry): HoroscopeEntry {
		return new HoroscopeEntry()
			.setDate(new Date(data.date))
			.setPrediction(data.prediction)
			.setIntensity(data.intensity)
			.setMood(data.mood)
			.setKeywords(data.keywords)
			.setRating(data.rating);
	}
}
