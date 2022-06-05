import { gCall, gql } from '#tests/testUtils';
import Days from '#utils/days';
import Sunsigns from '#utils/sunsigns';

describe('getHoroscope', () => {
	beforeAll(() => {
		jest.useFakeTimers();
		jest.setSystemTime(new Date('2020-01-01T12:00:00.000+00:00'));
	});

	afterAll(() => {
		jest.useRealTimers();
	});

	const getHoroscope = gql`
		query getHoroscope($horoscope: Sunsigns!, $day: Days) {
			getHoroscope(sunsign: $horoscope, day: $day) {
				prediction
				intensity
				keywords
				mood
				rating
				date
			}
		}
	`;

	test('GIVEN no day THEN defaults to today', async () => {
		const { data } = await gCall<'getHoroscope'>({
			source: getHoroscope,
			variableValues: { horoscope: Sunsigns.pisces }
		});

		expect(data.getHoroscope.date).toBeBefore(new Date());
		expect(data.getHoroscope.date).toBeDefined();
		expect(data.getHoroscope.intensity).toBeDefined();
		expect(data.getHoroscope.keywords).toBeDefined();
		expect(data.getHoroscope.mood).toBeDefined();
		expect(data.getHoroscope.prediction).toBeDefined();
		expect(data.getHoroscope.rating).toBeDefined();
	});

	test('GIVEN yesterday date THEN defaults to today', async () => {
		const { data } = await gCall<'getHoroscope'>({
			source: getHoroscope,
			variableValues: { horoscope: Sunsigns.aries, day: Days.yesterday }
		});

		expect(data.getHoroscope.date).toBeBefore(new Date());
		expect(data.getHoroscope.prediction).toBeDefined();
	});

	test('GIVEN tomorrow date THEN defaults to today', async () => {
		const { data } = await gCall<'getHoroscope'>({
			source: getHoroscope,
			variableValues: { horoscope: Sunsigns.gemini, day: Days.tomorrow }
		});

		expect(data.getHoroscope.date).toBeAfter(new Date());
		expect(data.getHoroscope.prediction).toBeDefined();
	});
});
