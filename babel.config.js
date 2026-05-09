module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    development: {
      compact: false
    },
    production: {
      plugins: [['transform-remove-console']]
    }
  },
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: '.',
        alias: {
          '@': './src',
          '@assets': './assets'
        }
      }
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'react-native-worklets/plugin'
  ]
};
