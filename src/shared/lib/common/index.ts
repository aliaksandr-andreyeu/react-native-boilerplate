import BootSplash from 'react-native-bootsplash';
import { isEqual } from 'lodash';
import { logError } from '@/shared/lib/logger';

export const jsonParse = <T>(data: string): T | undefined => {
  try {
    const json = JSON.parse(data) as T;

    return json;
  } catch (error: unknown) {
    console.error(error);
    return;
  }
};

export const isValidJson = (str: string): boolean => {
  try {
    const isJson = !!jsonParse(str);

    return isJson;
  } catch (error: unknown) {
    console.error(error);
    return false;
  }
};

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
