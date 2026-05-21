import { View } from 'react-native';

export const BottomSheetModalProvider = View;
export const BottomSheetModal = View;
export const useBottomSheetModal = () => ({
  present: jest.fn(),
  dismiss: jest.fn()
});
