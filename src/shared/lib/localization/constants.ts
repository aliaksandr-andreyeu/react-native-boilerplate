export interface Locale {
  languageCode: string;
  scriptCode?: string;
  countryCode: string;
  languageTag: string;
  isRTL: boolean;
}

export type Language = Partial<Locale> & {
  languageCode: string;
  languageName: string;
  isRTL: boolean;
};

export const Languages: Language[] = [
  { languageName: 'العربية', languageCode: 'ar', isRTL: true },
  { languageName: 'Български', languageCode: 'bg', isRTL: false },
  { languageName: 'Čeština', languageCode: 'cs', isRTL: false },
  { languageName: 'Dansk', languageCode: 'da', isRTL: false },
  { languageName: 'Deutsch', languageCode: 'de', isRTL: false },
  { languageName: 'Ελληνικά', languageCode: 'el', isRTL: false },
  { languageName: 'English', languageCode: 'en', isRTL: false },
  { languageName: 'Español', languageCode: 'es', isRTL: false },
  { languageName: 'Eesti', languageCode: 'et', isRTL: false },
  { languageName: 'فارسی', languageCode: 'fa', isRTL: true },
  { languageName: 'Suomi', languageCode: 'fi', isRTL: false },
  { languageName: 'Français', languageCode: 'fr', isRTL: false },
  { languageName: 'עברית', languageCode: 'he', isRTL: true },
  { languageName: 'Magyar', languageCode: 'hu', isRTL: false },
  { languageName: 'Indonesia', languageCode: 'id', isRTL: false },
  { languageName: 'Italiano', languageCode: 'it', isRTL: false },
  { languageName: '日本語', languageCode: 'ja', isRTL: false },
  { languageName: '한국어', languageCode: 'ko', isRTL: false },
  { languageName: 'Lietuvių', languageCode: 'lt', isRTL: false },
  { languageName: 'Latviešu', languageCode: 'lv', isRTL: false },
  { languageName: 'Nederlands', languageCode: 'nl', isRTL: false },
  { languageName: 'Norsk', languageCode: 'no', isRTL: false },
  { languageName: 'ਪੰਜਾਬੀ', languageCode: 'pa', isRTL: false },
  { languageName: 'Polski', languageCode: 'pl', isRTL: false },
  { languageName: 'Português', languageCode: 'pt', isRTL: false },
  { languageName: 'Română', languageCode: 'ro', isRTL: false },
  { languageName: 'Русский', languageCode: 'ru', isRTL: false },
  { languageName: 'Slovenčina', languageCode: 'sk', isRTL: false },
  { languageName: 'Slovenščina', languageCode: 'sl', isRTL: false },
  { languageName: 'Svenska', languageCode: 'sv', isRTL: false },
  { languageName: 'Tagalog', languageCode: 'tl', isRTL: false },
  { languageName: 'Türkçe', languageCode: 'tr', isRTL: false },
  { languageName: 'Українська', languageCode: 'uk', isRTL: false },
  { languageName: 'اردو', languageCode: 'ur', isRTL: true },
  { languageName: 'Tiếng Việt', languageCode: 'vi', isRTL: false },
  { languageName: '中文', languageCode: 'zh', isRTL: false }
];

export const Lang = Object.fromEntries(Languages.map((l) => [l.languageCode.toUpperCase(), l.languageCode]));

export const fallbackLng = Lang.EN;

export type LangCode = (typeof Lang)[keyof typeof Lang];
