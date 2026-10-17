jest.mock('@sentry/react-native', () => {
  const navigationIntegration = {
    registerNavigationContainer: jest.fn()
  };

  return {
    init: jest.fn(),
    wrap: (component) => component,
    captureException: jest.fn(),
    reactNavigationIntegration: jest.fn(() => navigationIntegration)
  };
});
