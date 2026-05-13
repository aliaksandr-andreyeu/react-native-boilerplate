import { LANGUAGES, fallbackLng } from '@/app/localization';

export const getLanguageName = (languageCode: string) => {
  if (!languageCode) {
    return '';
  }
  const languageData = LANGUAGES.find(({ lc }) => lc === languageCode);
  if (languageData !== undefined) {
    return languageData.lg;
  }
  const fallbackLanguageData = LANGUAGES.find(({ lc }) => lc === fallbackLng);
  if (fallbackLanguageData !== undefined) {
    return fallbackLanguageData.lg;
  }
  return '';
};
