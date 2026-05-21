import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources, fallbackLng, getInitialLocale, Locale } from '@/shared';

const handleLanguage = () => {
  const initialLocale = getInitialLocale();

  console.error('initialLocale', initialLocale);

  const { languageCode: lng } = initialLocale || ({} as Locale);

  console.error('lng', lng);

  return i18n.use(initReactI18next).init({
    resources,
    compatibilityJSON: 'v4',
    lng,
    fallbackLng,
    interpolation: {
      escapeValue: false
    }
  });
};

handleLanguage();

export default i18n;
