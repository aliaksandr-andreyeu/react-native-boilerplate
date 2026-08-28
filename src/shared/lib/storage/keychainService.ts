import * as Keychain from 'react-native-keychain';
import { type KeychainOptions } from './types';

export const keychainService = {
  set: async (key: string, value: string, options: KeychainOptions): Promise<boolean> => {
    const { service, biometric = false } = options;
    const accessControl = biometric ? Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET_OR_DEVICE_PASSCODE : undefined;

    const result = await Keychain.setGenericPassword(key, value, {
      service,
      accessControl,
      accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY
    });

    return !!result;
  },
  get: async (options: KeychainOptions): Promise<string | null> => {
    const { service } = options;
    const credentials = await Keychain.getGenericPassword({ service });
    if (credentials) {
      return credentials.password;
    }
    return null;
  },
  remove: async (options: KeychainOptions): Promise<boolean> => {
    const { service } = options;
    const result = await Keychain.resetGenericPassword({ service });
    return result;
  }
};
