import { getLocales } from 'react-native-localize';
import { getAppLocale, setAppLocale } from '@/shared/lib/storage';
import { type Locale, fallbackLng, Languages, type Language } from './constants';

const checkDeviceLocale = (): Locale => {
  const data: Locale[] = getLocales();

  if (data?.length === 0) {
    return {} as Locale;
  }
  return data?.find((item) => item) || ({} as Locale);
};

export const getInitialLocale = (): Locale => {
  const storedLocale = getAppLocale();

  if (!storedLocale) {
    const deviceLocale = checkDeviceLocale();
    setAppLocale(deviceLocale);
    return deviceLocale;
  }

  return storedLocale;
};

export const getLanguageName = (languageCode: string) => {
  const languageData = Languages.find((el) => el.languageCode === languageCode);
  if (languageData !== undefined) {
    return languageData.languageName;
  }
  const fallbackLanguageData = Languages.find((el) => el.languageCode === fallbackLng);
  const { languageName = '' } = fallbackLanguageData || ({} as Language);
  return languageName;
};

export const isRTLLanguage = () => {
  const initialLocale = getInitialLocale();
  const { isRTL } = initialLocale;
  return isRTL;
};

export { type Locale, fallbackLng, Lang, type LangCode } from './constants';
export { type Translation, resources } from './resources';
