import { constants } from '@skyra/timestamp';
import Days from '@utils/days';
import Sunsigns from '@utils/sunsigns';
import { DataResponse, formatResponse, gCall, gql } from './testUtils';

describe('getHoroscope', () => {
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
		const timestamp = new Date(Date.now());

		const { data } = (await gCall({
			source: getHoroscope,
			variableValues: { horoscope: Sunsigns.pisces }
		}).then(formatResponse)) as DataResponse<'getHoroscope'>;

		expect(data.getHoroscope.date).toEqual(timestamp.getTime());
		expect(data.getHoroscope.date).toBeDefined();
		expect(data.getHoroscope.intensity).toBeDefined();
		expect(data.getHoroscope.keywords).toBeDefined();
		expect(data.getHoroscope.mood).toBeDefined();
		expect(data.getHoroscope.prediction).toBeDefined();
		expect(data.getHoroscope.rating).toBeDefined();
	});

	test('GIVEN yesterday date THEN defaults to today', async () => {
		const timestamp = new Date(Date.now() - constants.day);

		const { data } = (await gCall({
			source: getHoroscope,
			variableValues: { horoscope: Sunsigns.aries, day: Days.yesterday }
		}).then(formatResponse)) as DataResponse<'getHoroscope'>;

		expect(data.getHoroscope.date).toEqual(timestamp.getTime());
		expect(data.getHoroscope.prediction).toBeDefined();
	});

	test('GIVEN tomorrow date THEN defaults to today', async () => {
		const timestamp = new Date(Date.now() + constants.day);

		const { data } = (await gCall({
			source: getHoroscope,
			variableValues: { horoscope: Sunsigns.gemini, day: Days.tomorrow }
		}).then(formatResponse)) as DataResponse<'getHoroscope'>;

		expect(data.getHoroscope.date).toEqual(timestamp.getTime());
		expect(data.getHoroscope.prediction).toBeDefined();
	});
});
