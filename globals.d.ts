import { UserTheme, type Translation } from '@/shared';

declare module '@react-navigation/native' {
  export function useTheme(): UserTheme;
}

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: Translation;
    };
  }
}
