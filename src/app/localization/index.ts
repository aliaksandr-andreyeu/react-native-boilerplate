import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';
import { getAppLanguage, setAppLanguage } from '@/shared/utils/storage';

import en from './locales/en.json';
/*
import ar from './locales/ar.json';
import bg from './locales/bg.json';
import cs from './locales/cs.json';
import da from './locales/da.json';
import de from './locales/de.json';
import el from './locales/el.json';
import es from './locales/es.json';
import et from './locales/et.json';
import fa from './locales/fa.json';
import fi from './locales/fi.json';
import fr from './locales/fr.json';
import he from './locales/he.json';
import hu from './locales/hu.json';
import id from './locales/id.json';
import it from './locales/it.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import lt from './locales/lt.json';
import lv from './locales/lv.json';
import nl from './locales/nl.json';
import no from './locales/no.json';
import pa from './locales/pa.json';
import pl from './locales/pl.json';
import pt from './locales/pt.json';
import ro from './locales/ro.json';
import ru from './locales/ru.json';
import sk from './locales/sk.json';
import sl from './locales/sl.json';
import sv from './locales/sv.json';
import tl from './locales/tl.json';
import tr from './locales/tr.json';
import uk from './locales/uk.json';
import ur from './locales/ur.json';
import vi from './locales/vi.json';
import zh from './locales/zh.json';
*/

import Reactotron from 'reactotron-react-native';

export type Locales = typeof en;

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: Locales;
    };
  }
}

export enum Lang {
  AR = 'ar',
  BG = 'bg',
  CS = 'cs',
  DA = 'da',
  DE = 'de',
  EL = 'el',
  EN = 'en',
  ES = 'es',
  ET = 'et',
  FA = 'fa',
  FI = 'fi',
  FR = 'fr',
  HE = 'he',
  HU = 'hu',
  ID = 'id',
  IT = 'it',
  JA = 'ja',
  KO = 'ko',
  LT = 'lt',
  LV = 'lv',
  NL = 'nl',
  NO = 'no',
  PA = 'pa',
  PL = 'pl',
  PT = 'pt',
  RO = 'ro',
  RU = 'ru',
  SK = 'sk',
  SL = 'sl',
  SV = 'sv',
  TL = 'tl',
  TR = 'tr',
  UK = 'uk',
  UR = 'ur',
  VI = 'vi',
  ZH = 'zh'
}

export interface Locale {
  lg: string;
  lc: string;
  rtl: boolean;
}

export const LANGUAGES: Locale[] = [
  { lg: 'العربية', lc: 'ar', rtl: true },
  { lg: 'Български', lc: 'bg', rtl: false },
  { lg: 'Čeština', lc: 'cs', rtl: false },
  { lg: 'Dansk', lc: 'da', rtl: false },
  { lg: 'Deutsch', lc: 'de', rtl: false },
  { lg: 'Ελληνικά', lc: 'el', rtl: false },
  { lg: 'English', lc: 'en', rtl: false },
  { lg: 'Español', lc: 'es', rtl: false },
  { lg: 'Eesti', lc: 'et', rtl: false },
  { lg: 'فارسی', lc: 'fa', rtl: true },
  { lg: 'Suomi', lc: 'fi', rtl: false },
  { lg: 'Français', lc: 'fr', rtl: false },
  { lg: 'עברית', lc: 'he', rtl: true },
  { lg: 'Magyar', lc: 'hu', rtl: false },
  { lg: 'Indonesia', lc: 'id', rtl: false },
  { lg: 'Italiano', lc: 'it', rtl: false },
  { lg: '日本語', lc: 'ja', rtl: false },
  { lg: '한국어', lc: 'ko', rtl: false },
  { lg: 'Lietuvių', lc: 'lt', rtl: false },
  { lg: 'Latviešu', lc: 'lv', rtl: false },
  { lg: 'Nederlands', lc: 'nl', rtl: false },
  { lg: 'Norsk', lc: 'no', rtl: false },
  { lg: 'ਪੰਜਾਬੀ', lc: 'pa', rtl: false },
  { lg: 'Polski', lc: 'pl', rtl: false },
  { lg: 'Português', lc: 'pt', rtl: false },
  { lg: 'Română', lc: 'ro', rtl: false },
  { lg: 'Русский', lc: 'ru', rtl: false },
  { lg: 'Slovenčina', lc: 'sk', rtl: false },
  { lg: 'Slovenščina', lc: 'sl', rtl: false },
  { lg: 'Svenska', lc: 'sv', rtl: false },
  { lg: 'Tagalog', lc: 'tl', rtl: false },
  { lg: 'Türkçe', lc: 'tr', rtl: false },
  { lg: 'Українська', lc: 'uk', rtl: false },
  { lg: 'اردو', lc: 'ur', rtl: true },
  { lg: 'Tiếng Việt', lc: 'vi', rtl: false },
  { lg: '中文', lc: 'zh', rtl: false }
];

interface LanguageProps {
  languageCode: string;
  scriptCode?: string;
  countryCode: string;
  languageTag: string;
  isRTL: boolean;
}

const checkDeviceLanguage = () => {
  const data: LanguageProps[] = getLocales();

  Reactotron.log('getLocales', data);
  console.error('getLocales', data);

  if (data?.length === 0) {
    return;
  }
  return data?.find((item) => item) || ({} as LanguageProps);
};

const getInitialLanguage = async () => {
  let storedLanguage = await getAppLanguage();

  Reactotron.error('storedLanguage', storedLanguage);
  console.error('storedLanguage', storedLanguage);

  if (!storedLanguage) {
    const deviceLngs = checkDeviceLanguage();

    Reactotron.log('deviceLngs', deviceLngs);
    console.error('deviceLngs', deviceLngs);

    const { languageCode } = deviceLngs || ({} as LanguageProps);
    storedLanguage = languageCode as Lang;
  }

  const language = Object.values(Lang).includes(storedLanguage) ? storedLanguage : Lang.EN;

  // AsyncStorage.setItem('app-language', language);
  await setAppLanguage(language);

  return language;
};

export const resources = {
  en: {
    translation: en
  }
  /*
  ar: {
    translation: ar
  },
  bg: {
    translation: bg
  },
  cs: {
    translation: cs
  },
  da: {
    translation: da
  },
  de: {
    translation: de
  },
  el: {
    translation: el
  },
  es: {
    translation: es
  },
  et: {
    translation: et
  },
  fa: {
    translation: fa
  },
  fi: {
    translation: fi
  },
  fr: {
    translation: fr
  },
  he: {
    translation: he
  },
  hu: {
    translation: hu
  },
  id: {
    translation: id
  },
  it: {
    translation: it
  },
  ja: {
    translation: ja
  },
  ko: {
    translation: ko
  },
  lt: {
    translation: lt
  },
  lv: {
    translation: lv
  },
  nl: {
    translation: nl
  },
  no: {
    translation: no
  },
  pa: {
    translation: pa
  },
  pl: {
    translation: pl
  },
  pt: {
    translation: pt
  },
  ro: {
    translation: ro
  },
  ru: {
    translation: ru
  },
  sk: {
    translation: sk
  },
  sl: {
    translation: sl
  },
  sv: {
    translation: sv
  },
  tl: {
    translation: tl
  },
  tr: {
    translation: tr
  },
  uk: {
    translation: uk
  },
  ur: {
    translation: ur
  },
  vi: {
    translation: vi
  },
  zh: {
    translation: zh
  }
*/
};

export const fallbackLng = Lang.EN;

const handleLanguage = async () => {
  const lng = await getInitialLanguage();

  Reactotron.error('lng', lng);

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
