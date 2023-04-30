const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: ['./jest-setup.js'],
  transform: {
    ...tsjPreset.transform,
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
    '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest',
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: './tsconfig.json' }],
  },
  cacheDirectory: '.jest/cache',
};
