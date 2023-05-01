const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  setupFiles: ['./jest-setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    ...tsjPreset.transform,
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
    '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest',
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: './tsconfig.json' }],
  },
  cacheDirectory: '.jest/cache',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native-permissions|)',
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/index.js',
    '!src/index.ts',
    '!<rootDir>/node_modules/',
    '!src/store/*.{ts,tsx}',
    '!src/types/*.{ts,tsx}',
  ],
};
