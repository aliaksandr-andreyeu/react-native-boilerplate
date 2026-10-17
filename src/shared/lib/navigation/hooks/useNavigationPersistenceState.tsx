import { useState, useLayoutEffect, useCallback } from 'react';
import { NavigationState } from '@react-navigation/native';
import { getNavigationState, setNavigationState } from '@/shared';

export const useNavigationPersistenceState = () => {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState<NavigationState | undefined>();

  useLayoutEffect(() => {
    const restoreState = () => {
      try {
        const state = getNavigationState();
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

  const onStateChange = useCallback((state: NavigationState | undefined) => {
    console.warn('state', state);
    setNavigationState(state);
  }, []);

  return { isReady, initialState, onStateChange };
};
