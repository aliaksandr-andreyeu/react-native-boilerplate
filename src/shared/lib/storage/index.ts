import { ThemeScheme } from '@/app/providers';
import { Lang } from '@/app/localization';
import { StorageKey, KeychainAccessTokenService, KeychainRefreshTokenService } from './constants';
import { storageService } from './storageService';
import { keychainService } from './keychainService';

export { storage } from './storageService';

export const getAccessToken = async (): Promise<string | null> => {
  try {
    let token = await keychainService.get({ service: KeychainAccessTokenService });
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const setAccessToken = async (token?: string | null): Promise<void> => {
  if (!token) {
    return;
  }
  try {
    await keychainService.set(StorageKey.AccessToken, token, { service: KeychainAccessTokenService });
  } catch (error) {
    console.error(error);
  }
};

export const getRefreshToken = async (): Promise<string | null> => {
  try {
    const token = await keychainService.get({ service: KeychainRefreshTokenService });
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const setRefreshToken = async (token?: string | null): Promise<void> => {
  if (!token) {
    return;
  }
  try {
    await keychainService.set(StorageKey.RefreshToken, token, { service: KeychainRefreshTokenService });
  } catch (error) {
    console.error(error);
  }
};

export const getAppTheme = (): ThemeScheme | undefined => {
  try {
    const theme = storageService.getString(StorageKey.Theme);
    return theme as ThemeScheme | undefined;
  } catch (error) {
    console.error(error);
    return;
  }
};

export const setAppTheme = (theme?: ThemeScheme | null): boolean => {
  if (!theme) {
    return false;
  }
  try {
    const result = storageService.setString(StorageKey.Theme, theme);
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getAppLanguage = (): Lang | undefined => {
  try {
    let language = storageService.getString(StorageKey.Language);
    return language as Lang | undefined;
  } catch (error) {
    console.error(error);
    return;
  }
};

export const setAppLanguage = (language: Lang): boolean => {
  if (!language) {
    return false;
  }
  try {
    const result = storageService.setString(StorageKey.Language, language);
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};
