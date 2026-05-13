export const getLocales = jest.fn(() => [
  {
    countryCode: 'US',
    languageTag: 'en-US',
    languageCode: 'en',
    isRTL: false
  }
]);

// If you use any other functions from the package, add them here.
// For example:
export const getCurrencies = jest.fn(() => ['USD']);
export const getCountry = jest.fn(() => 'US');
export const getTemperatureUnit = jest.fn(() => 'fahrenheit');
