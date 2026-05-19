import Reactotron from 'reactotron-react-native';
import type { ReactotronReactNative } from 'reactotron-react-native';
import mmkvPlugin from 'reactotron-react-native-mmkv';
import RNRestart from 'react-native-restart';
import { displayName } from './app.json';
import { storage } from '@/shared';

const tron = Reactotron.configure({
  name: displayName
})
  .use(mmkvPlugin<ReactotronReactNative>({ storage }))
  .useReactNative({
    asyncStorage: {},
    networking: {
      ignoreUrls: /symbolicate|generate_204|\/batch\/|\/e\//i
    }
  });

declare global {
  interface Console {
    tron?: Partial<ReactotronReactNative>;
  }
}

if (__DEV__) {
  tron.onCustomCommand({
    command: 'Reload App',
    title: 'Reload App',
    description: 'Reload App',
    handler: async () => {
      try {
        RNRestart.restart();
      } catch (error) {
        console.error(error);
      }
    }
  });

  tron.connect();

  (console as any).tron = tron as any;
}
export default tron;
