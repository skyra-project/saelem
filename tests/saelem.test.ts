import { constants } from '@klasa/timestamp';
import { formatResponse, gCall, gql } from './testUtils/testUtils';
import { DataResponse, Days } from './testUtils/types';

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
			variableValues: { horoscope: 'pisces' }
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
		const timestamp = new Date(Date.now() - constants.DAY);

		const { data } = (await gCall({
			source: getHoroscope,
			variableValues: { horoscope: 'aries', day: Days.Yesterday }
		}).then(formatResponse)) as DataResponse<'getHoroscope'>;

		expect(data.getHoroscope.date).toEqual(timestamp.getTime());
		expect(data.getHoroscope.prediction).toBeDefined();
	});

	test('GIVEN tomorrow date THEN defaults to today', async () => {
		const timestamp = new Date(Date.now() + constants.DAY);

		const { data } = (await gCall({
			source: getHoroscope,
			variableValues: { horoscope: 'aries', day: Days.Tomorrow }
		}).then(formatResponse)) as DataResponse<'getHoroscope'>;

		expect(data.getHoroscope.date).toEqual(timestamp.getTime());
		expect(data.getHoroscope.prediction).toBeDefined();
	});
});
