import type { RedisOptions } from 'ioredis';
import 'reflect-metadata';

jest.retryTimes(2);

/** January 1st 2020 00:00 */
const NOW = new Date('2020-01-01T00:00:00.000+00:00').getTime();

Date.now = jest.fn().mockImplementation(() => NOW);

jest.mock('ioredis', () => {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const Redis = require('ioredis-mock');
	if (typeof Redis === 'object') {
		return {
			Command: { _transformer: { argument: {}, reply: {} } }
		};
	}
	// second mock for our code
	return function init(options: RedisOptions) {
		return new Redis(options);
	};
});
