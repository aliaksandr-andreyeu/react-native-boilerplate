import { config } from '@/shared/config';

const { applicationId: id } = config;

export const enum StorageKey {
  Theme = '@THEME',
  AccessToken = '@ACCESS_TOKEN',
  RefreshToken = '@REFRESH_TOKEN',
  Language = '@LANGUAGE',
  LanguageConfirmed = '@LANGUAGE_CONFIRMED',
  NavigationState = '@NAVIGATION_STATE'
}

export const enum ThemeScheme {
  Dark = 'dark',
  Light = 'light'
}

export const KeychainAccessTokenService = `${id}.auth.access-token`;
export const KeychainRefreshTokenService = `${id}.auth.refresh-token`;
