import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeScheme } from '@/app/providers';
import { Lang } from '@/app/localization';

export enum Storage_Key {
  Theme = '@THEME',
  Language = '@LANGUAGE',
  Language_Confirmed = '@LANGUAGE_CONFIRMED',
  Refresh_Token = '@REFRESH_TOKEN'
}

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
};

export const getAppTheme = async (): Promise<ThemeScheme | null> => {
  try {
    let theme = await AsyncStorage.getItem(Storage_Key.Theme);
    return theme as ThemeScheme | null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const setAppTheme = async (theme?: ThemeScheme | null): Promise<void> => {
  if (!theme) {
    return;
  }
  try {
    await AsyncStorage.setItem(Storage_Key.Theme, theme);
  } catch (error) {
    console.error(error);
  }
};

export const getAppLanguage = async (): Promise<Lang | null> => {
  try {
    let language = await AsyncStorage.getItem(Storage_Key.Language);
    return language as Lang | null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const setAppLanguage = async (language: Lang): Promise<void> => {
  if (!language) {
    return;
  }
  try {
    await AsyncStorage.setItem(Storage_Key.Language, language);
  } catch (error) {
    console.error(error);
  }
};
