/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useLayoutEffect } from 'react';
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { BaseIcon, BaseIconName, hideBootSplash } from '@/shared';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useLayoutEffect(() => {
    hideBootSplash(true);
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <BaseIcon name={BaseIconName.Close} size={24} color='red' />
      <BaseIcon name={BaseIconName.User} size={24} color='red' />
      <BaseIcon name={BaseIconName.Bars} size={24} color='red' />
      <BaseIcon name={BaseIconName.Calendar} size={24} color='red' />
      <NewAppScreen templateFileName='App.tsx' safeAreaInsets={safeAreaInsets} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
