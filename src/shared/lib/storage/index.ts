import { NavigationState } from '@react-navigation/native';
import { Locale } from '@/shared/lib/localization';
import { StorageKey, KeychainAccessTokenService, KeychainRefreshTokenService, ThemeScheme } from './constants';
import { storageService } from './storageService';
import { keychainService } from './keychainService';

export { storage } from './storageService';
export { ThemeScheme } from './constants';

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

export const getNavigationState = (): NavigationState | undefined => {
  try {
    const theme = storageService.getObject(StorageKey.NavigationState);
    return theme as NavigationState | undefined;
  } catch (error) {
    console.error(error);
    return;
  }
};

export const setNavigationState = (navigationState?: NavigationState | null): boolean => {
  if (!navigationState) {
    return false;
  }
  try {
    const result = storageService.setObject(StorageKey.NavigationState, navigationState);
    return result;
  } catch (error) {
    console.error(error);
    return false;
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

export const getAppLocale = (): Locale | undefined => {
  try {
    let locale = storageService.getObject(StorageKey.Language);
    return locale as Locale | undefined;
  } catch (error) {
    console.error(error);
    return;
  }
};

export const setAppLocale = (locale: Locale): boolean => {
  if (!locale) {
    return false;
  }
  try {
    const result = storageService.setObject(StorageKey.Language, locale);
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};
