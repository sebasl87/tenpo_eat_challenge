module.exports = {
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
  env: {
    test: {
      plugins: [['module:react-native-dotenv', { path: '.env' }]],
    },
  },
  presets: ['module:metro-react-native-babel-preset'],
};
