module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  testMatch: ['<rootDir>/tests/*.test.ts'],
  setupFilesAfterEnv: ['<rootDir>/tests/testUtils/jest.setup.ts'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tests/tsconfig.json'
    }
  }
};
