import { config } from '@/shared';

const { applicationId: id } = config;

export const enum StorageKey {
  Theme = '@THEME',
  AccessToken = '@ACCESS_TOKEN',
  RefreshToken = '@REFRESH_TOKEN',
  Language = '@LANGUAGE',
  LanguageConfirmed = '@LANGUAGE_CONFIRMED'
}

export const KeychainAccessTokenService = `${id}.auth.access-token`;
export const KeychainRefreshTokenService = `${id}.auth.refresh-token`;
