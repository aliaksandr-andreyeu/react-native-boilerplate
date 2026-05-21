import 'react-native-get-random-values';
import 'text-encoding';
import 'react-native-gesture-handler';

import { AppRegistry, LogBox } from 'react-native';
import Application from '@/index';
import { name as appName } from './app.json';

if (__DEV__) {
  require('./reactotron.config');
}

LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => Application);
