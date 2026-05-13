import BootSplash from 'react-native-bootsplash';
import { isEqual } from 'lodash';
import { logError } from '@/shared/utils/logger';

export const jsonParse = (data: string | null | undefined): null | string | Record<string | number, any> => {
  if (!data) {
    return null;
  }
  try {
    const json = JSON.parse(data);

    return json;
  } catch (error: unknown) {
    console.error(error);
    return null;
  }
};

export function isValidJson(str: string) {
  if (!str) {
    return false;
  }
  try {
    const isJson = Boolean(jsonParse(str));

    return isJson;
  } catch (error: unknown) {
    console.error(error);
    return false;
  }
}

export const hideBootSplash = async (isFade?: boolean) => {
  try {
    const isVisible = await BootSplash.isVisible();

    if (!isVisible) {
      return;
    }

    await BootSplash.hide({ fade: Boolean(isFade) });
    console.log('BootSplash has been hidden successfully');
  } catch (error: unknown) {
    console.error(error);
    logError(error);
  }
};

export const arePropsEqual = <T>(prevProps: T, nextProps: T): boolean => {
  return isEqual(prevProps, nextProps);
};
