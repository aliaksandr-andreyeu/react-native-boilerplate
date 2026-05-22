import { FC, ReactNode, createContext, useContext, useLayoutEffect, useState, useMemo, useCallback } from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import * as Sentry from '@sentry/react-native';
import { useLogger, useReduxDevToolsExtension } from '@react-navigation/devtools';
import {
  theme,
  UserTheme,
  logError,
  getAppTheme,
  setAppTheme,
  useNavigationPersistenceState,
  ThemeScheme
} from '@/shared';

interface NavigationProviderProps {
  children?: ReactNode;
}

interface NavigationThemeContextProps {
  toggleTheme: () => void;
  theme: UserTheme;
}

const NavigationThemeContext = createContext<NavigationThemeContextProps>({
  toggleTheme: () => {},
  theme: {} as UserTheme
});

const navigationIntegration = Sentry.reactNavigationIntegration({
  enableTimeToInitialDisplay: true
});

const { lightTheme, darkTheme } = theme || {};

export const NavigationProvider: FC<NavigationProviderProps> = ({ children }) => {
  const navigationRef = useNavigationContainerRef();

  const { isReady, initialState, onStateChange } = useNavigationPersistenceState();

  useLogger(navigationRef);
  useReduxDevToolsExtension(navigationRef);

  const colorScheme = useColorScheme();
  const isDarkDeviceMode = Boolean(colorScheme === ThemeScheme.Dark);

  const [isDarkAppMode, setDarkAppMode] = useState<boolean | undefined>(undefined);

  const onReady = () => {
    console.error('@@@@@@@@@@@@ NavigationContainer onReady is ready');
    navigationIntegration.registerNavigationContainer(navigationRef);
  };

  const toggleTheme = useCallback(() => {
    setDarkAppMode(!isDarkAppMode);
  }, [isDarkAppMode]);

  useLayoutEffect(() => {
    const checkAppThemeHandler = () => {
      try {
        const currentAppTheme = getAppTheme();

        if (!currentAppTheme) {
          const appColorScheme = isDarkDeviceMode ? ThemeScheme.Dark : ThemeScheme.Light;

          setAppTheme(appColorScheme);

          return;
        }

        setDarkAppMode(currentAppTheme === ThemeScheme.Dark);
      } catch (error: unknown) {
        console.error(error);
        logError(error);
      }
    };

    checkAppThemeHandler();
  }, [isDarkDeviceMode]);

  useLayoutEffect(() => {
    const changeAppThemeHandler = () => {
      try {
        const appColorScheme = isDarkAppMode ? ThemeScheme.Dark : ThemeScheme.Light;
        setAppTheme(appColorScheme);
      } catch (error: unknown) {
        console.error(error);
        logError(error);
      }
    };

    changeAppThemeHandler();
  }, [isDarkAppMode]);

  useLayoutEffect(() => {
    const unsubscribeNavigationIsReadyListener = navigationRef.addListener('ready', () => {
      console.error('@@@@@@@@@@@@ NavigationContainer Listener is ready');
      console.error('@@@@@@@@@@@@ NavigationContainer getRootState', navigationRef.getRootState());
    });

    return () => {
      unsubscribeNavigationIsReadyListener();
    };
  }, [navigationRef]);

  const appTheme = useMemo(() => {
    if (isDarkAppMode === undefined) {
      return;
    }

    if (isDarkAppMode) {
      return darkTheme;
    }

    return lightTheme;
  }, [isDarkAppMode]);

  if (!children || !appTheme) {
    return null;
  }

  if (!isReady) {
    return null;
  }

  return (
    <NavigationThemeContext.Provider value={{ toggleTheme, theme: appTheme }}>
      <NavigationContainer
        ref={navigationRef}
        theme={appTheme}
        onReady={onReady}
        initialState={initialState}
        onStateChange={onStateChange}
      >
        {children}
      </NavigationContainer>
    </NavigationThemeContext.Provider>
  );
};

export const useNavigationTheme = () => useContext(NavigationThemeContext);
