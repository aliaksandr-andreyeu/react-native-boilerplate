import { getCrashlytics, recordError, log } from '@react-native-firebase/crashlytics';
import * as Sentry from '@sentry/react-native';

const crashlytics = getCrashlytics();

const isError = (error: Error | unknown): error is Error => {
  return (error as Error)?.message !== undefined;
};

export const logError = (error: unknown, data?: Record<string, any>) => {
  if (!isError(error)) {
    return;
  }

  recordError(crashlytics, error);
  Sentry.captureException(error);

  if (!data) {
    return;
  }

  log(crashlytics, JSON.stringify(data));
};
