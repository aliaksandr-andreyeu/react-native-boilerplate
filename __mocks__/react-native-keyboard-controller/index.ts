import React from 'react';
import { View } from 'react-native';

export const KeyboardProvider = ({ children }: { children: React.ReactNode }) =>
  React.createElement(View, null, children);

export const useKeyboardController = () => ({
  setKeyboardOffset: jest.fn()
});
