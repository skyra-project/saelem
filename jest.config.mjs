// eslint-disable-next-line @typescript-eslint/require-await
export default async () => ({
	coverageProvider: 'v8',
	preset: 'ts-jest',
	testMatch: ['<rootDir>/tests/*.test.ts'],
	setupFilesAfterEnv: ['jest-extended/all', '<rootDir>/tests/jest.setup.ts'],
	moduleNameMapper: {
		'^#utils/(.*)$': '<rootDir>/src/lib/utils/$1',
		'^#redis/(.*)$': '<rootDir>/src/lib/redis/$1',
		'^#lib/(.*)$': '<rootDir>/src/lib/$1',
		'^#root/(.*)$': '<rootDir>/src/$1',
		'^#tests/(.*)$': '<rootDir>/tests/$1'
	},
	globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/tests/tsconfig.json'
		}
	},
	reporters: ['default', 'github-actions']
});
