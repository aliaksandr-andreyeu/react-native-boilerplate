import { Platform, I18nManager, Dimensions } from 'react-native';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

console.log('I18nManager allowRTL', I18nManager.allowRTL(true));
console.log('I18nManager isRTL', I18nManager.isRTL);

export const config = {
  applicationId: 'com.boilerplate',
  isDevelopment: __DEV__,
  isRTL: I18nManager.isRTL,
  isAndroid: Platform.OS === 'android',
  isIOS: Platform.OS === 'ios',
  platformVersion: Platform.Version,
  screenHeight,
  screenWidth,
  platform: {
    os: Platform.OS,
    version: Platform.Version
  },
  storageId: 'user-storage',
  fonts: {
    montserrat: {
      medium: 'Montserrat-Medium',
      bold: 'Montserrat-Bold',
      extraBold: 'Montserrat-ExtraBold',
      black: 'Montserrat-Black'
    },
    rubik: {
      regular: 'Rubik-Regular',
      medium: 'Rubik-Medium',
      bold: 'Rubik-Bold',
      extraBold: 'Rubik-ExtraBold'
    }
  },
  validation: {
    emailRegex: /^[_A-Za-z0-9-\\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/i
  },
  components: {
    headerBar: {
      height: 62,
      buttons: {
        activeOpacity: 0.9,
        hitSlop: 16
      }
    },
    tabBar: {
      height: 62,
      buttons: {
        activeOpacity: 0.9,
        hitSlop: 0
      }
    },
    drawer: {
      buttons: {
        activeOpacity: 0.8,
        hitSlop: 0
      }
    },
    buttons: {
      activeOpacity: 0.8,
      hitSlop: 0,
      pressRetentionOffset: 8
    }
  }
} as const;

export type Config = typeof config;
