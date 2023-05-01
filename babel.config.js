module.exports = {
  plugins: [
    ['@babel/plugin-proposal-class-properties'],
    [
      'module:react-native-dotenv',
      {
        moduleName: 'dotenv',
        path: '.env',
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-env'],
};
