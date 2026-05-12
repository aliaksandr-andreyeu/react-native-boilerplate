import BootSplash from 'react-native-bootsplash';
// import { logError } from '@/shared/utils/logger';

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
    // logError(error);
  }
};
