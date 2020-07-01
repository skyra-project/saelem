import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'The horoscope data on a specific star sign' })
export default class HoroscopeEntry {
	@Field(() => Date, { description: 'The date for the prediction in milliseconds since UNIX epoch' })
	date!: Date;

	@Field(() => String, { description: 'The horoscope prediction' })
	prediction!: string;

	@Field(() => String, { description: 'The intensity of the prediction' })
	intensity!: string;

	@Field(() => String, { description: 'The mood for the prediction' })
	mood!: string;

	@Field(() => [String], { description: 'Keywords for this prediction' })
	keywords!: string[];

	@Field(() => Int, { description: 'The rating for the prediction, this is a number between 0 and 5 inclusive' })
	rating!: number;
}
