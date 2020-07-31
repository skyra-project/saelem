import HoroscopeArgs from '@lib/args';
import HoroscopeEntry from '@lib/entry';
import HoroscopeService from '@lib/service';
import { Args, Query, Resolver } from 'type-graphql';

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
	async getHoroscope(@Args() { sunsign, day }: HoroscopeArgs): Promise<HoroscopeEntry> {
		return this.horoscopeService.find(sunsign, day);
	}
}
