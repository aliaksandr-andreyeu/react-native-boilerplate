interface ReactotronMock {
  configure: jest.Mock<ReactotronMock>;
  useReactNative: jest.Mock<ReactotronMock>;
  connect: jest.Mock<ReactotronMock>;
  createEnhancer: jest.Mock<any>;
  log: jest.Mock<void>;
  warn: jest.Mock<void>;
  error: jest.Mock<void>;
  display: jest.Mock<void>;
}

const reactotronMock: ReactotronMock = {
  configure: jest.fn(() => reactotronMock),
  useReactNative: jest.fn(() => reactotronMock),
  connect: jest.fn(() => reactotronMock),
  createEnhancer: jest.fn(),
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
  display: jest.fn()
};

export default reactotronMock;
