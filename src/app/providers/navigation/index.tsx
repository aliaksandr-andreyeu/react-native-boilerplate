import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useLayoutEffect,
  useState,
  useMemo,
  useCallback
} from 'react';
import { useColorScheme } from 'react-native';
// import { EventSubscription, NativeEventEmitter, EmitterSubscription } from 'react-native';
import {
  createNavigationContainerRef,
  NavigationContainer,
  ParamListBase,
  NavigationRoute
} from '@react-navigation/native';
import * as Sentry from '@sentry/react-native';
import { useLogger, useReduxDevToolsExtension } from '@react-navigation/devtools';
import { theme, UserTheme, logError, getAppTheme, setAppTheme, config } from '@/shared';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { isDevelopment } = config;

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

export enum ThemeScheme {
  Dark = 'dark',
  Light = 'light'
}

interface NavigationProviderProps {
  children?: ReactNode;
}

interface NavigationThemeContextProps {
  toggleTheme: () => void;
  theme: UserTheme;
}

type NavigationStateChangeProps =
  | Readonly<
      Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[];
        routes: NavigationRoute<ParamListBase, string>[];
        type: string;
        stale: false;
      }>
    >
  | undefined;

const NavigationThemeContext = createContext<NavigationThemeContextProps>({
  toggleTheme: () => {},
  theme: {} as UserTheme
});

export const navigationRef = createNavigationContainerRef<ParamListBase>();

export const navigate = (name: string, params: object | undefined) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

const navigationIntegration = Sentry.reactNavigationIntegration({
  enableTimeToInitialDisplay: true
});

const { lightTheme, darkTheme } = theme || {};

export const NavigationProvider: FC<NavigationProviderProps> = ({ children }) => {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  if (isDevelopment) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLogger(navigationRef);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useReduxDevToolsExtension(navigationRef);
  }

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
    const checkAppThemeHandler = async () => {
      try {
        const currentAppTheme = await getAppTheme();

        if (!currentAppTheme) {
          const appColorScheme = isDarkDeviceMode ? ThemeScheme.Dark : ThemeScheme.Light;

          await setAppTheme(appColorScheme);

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

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = savedStateString ? JSON.parse(savedStateString) : undefined;

        if (state !== undefined) {
          setInitialState(state);
        }
      } catch (error: unknown) {
        console.error(error);
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  useLayoutEffect(() => {
    const changeAppThemeHandler = async () => {
      try {
        const appColorScheme = isDarkAppMode ? ThemeScheme.Dark : ThemeScheme.Light;
        await setAppTheme(appColorScheme);
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
  }, []);

  const appTheme = useMemo(() => {
    if (isDarkAppMode === undefined) {
      return;
    }

    if (isDarkAppMode) {
      return darkTheme;
    }

    return lightTheme;
  }, [isDarkAppMode]);

  const onStateChange = React.useCallback(async (state: NavigationStateChangeProps) => {
    // console.warn('state', state);
    await AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
  }, []);

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
