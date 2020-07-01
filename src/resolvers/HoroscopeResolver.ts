import { Args, Query, Resolver } from 'type-graphql';
import HoroscopeArgs from '../arguments/HoroscopeArgs';
import HoroscopeService from '../services/HoroscopeService';
import HoroscopeEntry from '../structures/HoroscopeEntry';
import { getRequestedFields } from '../utils/getRequestedFields';

@Resolver(HoroscopeEntry)
export default class HoroscopeResolver {
	public constructor(private horoscopeService: HoroscopeService) {
		this.horoscopeService = new HoroscopeService();
	}

	@Query(() => HoroscopeEntry, {
		description: [
			'Gets the horoscope for a given sunsign.',
			'Optionally you can pass one of "yesterday", "today" or "tomorrow" to get the horoscope for that relative day.',
			'Day defaults to "today"'
		].join(' ')
	})
	async getHoroscope(
		@Args() { sunsign, day }: HoroscopeArgs,
		@getRequestedFields() requestedFields: Set<keyof HoroscopeEntry>
	): Promise<HoroscopeEntry> {
		return this.horoscopeService.find(sunsign, day, requestedFields);
	}
}
