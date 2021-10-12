import type { RedisOptions } from 'ioredis';
import 'reflect-metadata';
import 'jest-extended/all';

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
