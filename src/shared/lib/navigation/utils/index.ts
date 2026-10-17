import { PartialState, NavigationState } from '@react-navigation/native';

export const getActiveRouteName = (state: Readonly<NavigationState> | PartialState<NavigationState>): string => {
  const defaultValue = '';
  if (!state) {
    return defaultValue;
  }
  const { index, routes } = state;
  if (index === undefined || routes === undefined || routes?.length === 0) {
    return defaultValue;
  }
  const { state: routeByIndexState, name } = routes?.[index] || {};
  if (!routeByIndexState) {
    return name || defaultValue;
  }
  return getActiveRouteName(routeByIndexState);
};
