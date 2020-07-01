import type { MiddlewareOptions } from '@apollographql/graphql-playground-html';

const defaultTabs: MiddlewareOptions['tabs'] = [
	{
		name: 'Get Horoscope',
		endpoint: 'http://localhost:8284',
		query: [
			'{',
			'  getHoroscope(sunsign: aries) {',
			'    prediction',
			'    intensity',
			'    keywords',
			'    mood',
			'    rating',
			'    date',
			'  }',
			'}'
		].join('\n')
	},
	{
		name: 'Get Horoscope - with Query',
		endpoint: 'http://localhost:8284',
		query: [
			'query getHoroscope($horoscope: Sunsigns!, $day: Days) {',
			'  getHoroscope(sunsign: $horoscope, day: $day) {',
			'    prediction',
			'    date',
			'  }',
			'}'
		].join('\n')
	}
];

export default defaultTabs;
