// __mocks__/react-native-gesture-handler.ts
import React from 'react';
import { View } from 'react-native';

// Простая заглушка для жестовых компонентов — рендерятся как View
const MockGestureComponent: React.FC<any> = (props) => {
  return React.createElement(View, props, props.children);
};

// Типизированный экспорт, повторяющий основные элементы библиотеки
const Gesture = {
  Pan: jest.fn(),
  Tap: jest.fn(),
  Fling: jest.fn(),
  LongPress: jest.fn(),
  Pinch: jest.fn(),
  Rotation: jest.fn(),
  ForceTouch: jest.fn()
};

const State = {
  UNDETERMINED: 0,
  FAILED: 1,
  BEGAN: 2,
  CANCELLED: 3,
  ACTIVE: 4,
  END: 5
};

export {
  MockGestureComponent as GestureHandlerRootView,
  MockGestureComponent as PanGestureHandler,
  MockGestureComponent as TapGestureHandler,
  MockGestureComponent as Swipeable,
  MockGestureComponent as RectButton,
  MockGestureComponent as BorderlessButton,
  MockGestureComponent as FlatList,
  MockGestureComponent as ScrollView,
  MockGestureComponent as TextInput,
  State,
  Gesture
  // добавьте сюда другие компоненты, которые используете
};

// Экспорты по умолчанию для совместимости
export default {
  GestureHandlerRootView: MockGestureComponent,
  PanGestureHandler: MockGestureComponent,
  TapGestureHandler: MockGestureComponent,
  Swipeable: MockGestureComponent,
  State,
  Gesture
};
