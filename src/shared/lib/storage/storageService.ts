import { createMMKV, deleteMMKV } from 'react-native-mmkv';
import { jsonParse } from '@/shared/lib/common';
import { config } from '@/shared/config';

const { storageId: id } = config;

export const storage = createMMKV({
  id,
  compareBeforeSet: true
});

export const clearStorage = () => {
  try {
    const result = deleteMMKV(id);
    return result;
  } catch (error: unknown) {
    console.error(error);
    return false;
  }
};

export const storageService = {
  getString: (key: string): string | undefined => {
    try {
      const result = storage.getString(key);
      return result;
    } catch (error: unknown) {
      console.error(key, error);
      return undefined;
    }
  },
  setString: (key: string, value: string): boolean => {
    try {
      storage.set(key, value);
      return true;
    } catch (error: unknown) {
      console.error(key, error);
      return false;
    }
  },
  getObject: <T>(key: string): T | undefined => {
    const jsonString = storageService.getString(key);
    if (!jsonString) return undefined;
    try {
      const result = jsonParse(jsonString) as T;
      return result;
    } catch (error: unknown) {
      console.error(key, error);
      return undefined;
    }
  },
  setObject: (key: string, value: unknown): boolean => {
    try {
      const jsonString = JSON.stringify(value);
      const result = storageService.setString(key, jsonString);
      return result;
    } catch (error: unknown) {
      console.error(key, error);
      return false;
    }
  },
  remove: (key: string): boolean => {
    try {
      const result = storage.remove(key);
      return result;
    } catch (error: unknown) {
      console.error(key, error);
      return false;
    }
  },
  clearAll: (): void => {
    try {
      storage.clearAll();
    } catch (error: unknown) {
      console.error(error);
    }
  }
};
