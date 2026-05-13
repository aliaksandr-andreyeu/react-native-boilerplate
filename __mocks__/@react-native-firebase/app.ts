// Minimal mock for @react-native-firebase/app that avoids any native module registration.
const mockApp = jest.fn(() => ({
  name: '[DEFAULT]',
  options: {},
  delete: jest.fn()
}));

const firebase = {
  app: mockApp,
  apps: [],
  initializeApp: jest.fn(() => mockApp())
};

// Default export (used when crashlytics imports internally)
export default firebase;

// Named exports for any direct usage (if your code does `import { firebase } from '@react-native-firebase/app'`)
export { firebase };
export const getApp = jest.fn(() => mockApp());
export const initializeApp = jest.fn(() => mockApp());
