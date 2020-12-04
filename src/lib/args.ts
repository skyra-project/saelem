import days from '#utils/days';
import sunsigns from '#utils/sunsigns';
import { IsIn, IsString } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export default class HoroscopeArgs {
	@Field(() => sunsigns, { description: 'The sunsign to check' })
	@IsString()
	@IsIn(Object.values(sunsigns))
	public sunsign!: keyof typeof sunsigns;

	@Field(() => days, { description: 'The day for which to get the horoscope prediction ' })
	@IsString()
	@IsIn(Object.values(days))
	public day: keyof typeof days = 'today';
}
