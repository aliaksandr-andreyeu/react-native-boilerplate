module.exports = {
  preset: '@react-native/jest-preset',
  setupFilesAfterTest: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|react-native-reanimated|react-native-gesture-handler|react-native-worklets|@react-native-firebase|@sentry|react-native-mmkv|@gorhom/bottom-sheet)/)'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
