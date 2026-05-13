// Mock named exports exactly as you use them.
// Adjust the return types if necessary; they are all jest mock functions.
export const getCrashlytics = jest.fn(() => ({
  log: jest.fn(),
  recordError: jest.fn(),
  setUserId: jest.fn()
  // ... any other methods you call on the returned instance
}));

export const recordError = jest.fn();
export const log = jest.fn();
