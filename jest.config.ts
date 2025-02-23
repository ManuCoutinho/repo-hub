import nextJest from 'next/jest'
import type { Config } from 'jest'

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  rootDir: './src',
  moduleDirectories: ['node_modules', 'src/'],
  testMatch: ['**/tests/**/*.[t]s?(x)', '**/?(*.)+(spec|test|tests).[tj]s?(x)'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/.out/',
    '/public/'
  ],
  setupFilesAfterEnv: ['../jest.setup.ts'],
  transformIgnorePatterns: ['/node_modules/']
}

const createJestConfig = nextJest({
  dir: './'
})
export default createJestConfig(config)
