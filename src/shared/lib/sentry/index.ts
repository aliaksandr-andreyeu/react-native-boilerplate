import * as Sentry from '@sentry/react-native';

export const navigationIntegration = Sentry.reactNavigationIntegration({
  enableTimeToInitialDisplay: true
});

export const initSentry = (): void => {
  Sentry.init({
    integrations: [navigationIntegration]
  });
};

export { Sentry };
