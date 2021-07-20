import type Days from '#utils/days';
import type Sunsigns from '#utils/sunsigns';

export interface QueryGetHoroscopeArgs {
	sunsign: typeof Sunsigns;
	day?: typeof Days | null;
}

export interface Query {
	/** Gets the horoscope for a given sunsign. Optionally you can pass one of "yesterday", "today" or "tomorrow" to get the horoscope for that relative day. Day defaults to "today" */
	readonly getHoroscope: HoroscopeEntry;
}

/** The horoscope data on a specific star sign */
export interface HoroscopeEntry {
	/** The date for the prediction in milliseconds since UNIX epoch */
	readonly date: unknown;
	/** The horoscope prediction */
	readonly prediction: string;
	/** The intensity of the prediction */
	readonly intensity: string;
	/** The mood for the prediction */
	readonly mood: string;
	/** Keywords for this prediction */
	readonly keywords: readonly string[];
	/** The rating for the prediction, this is a number between 0 and 5 inclusive */
	readonly rating: number;
}
