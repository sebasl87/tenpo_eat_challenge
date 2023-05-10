module.exports = {
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: 'dotenv',
        path: '.env',
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
