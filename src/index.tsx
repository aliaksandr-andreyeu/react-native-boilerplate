import '@/app/localization';
import { initSentry } from '@/shared/lib/sentry';
import { FC } from 'react';

initSentry();
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { initializeFlipper, isFlipperEnabled } from 'react-native-flipper-integration';
import { store } from '@/store';
import App from '@/app';

if (__DEV__ && isFlipperEnabled()) {
  initializeFlipper();
}

const Application: FC = () => {
  return (
    <GestureHandlerRootView>
      <KeyboardProvider>
        <SafeAreaProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </SafeAreaProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
};

export default Application;
