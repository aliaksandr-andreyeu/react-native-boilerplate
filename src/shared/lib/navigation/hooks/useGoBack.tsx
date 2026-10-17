import { useCallback, useMemo } from 'react';
import { useNavigation, NavigationProp, ParamListBase, useNavigationState } from '@react-navigation/native';
import { getActiveRouteName } from '@/shared/lib/navigation/utils';
import {
  BASE_ROUTE_NAMES,
  BaseParamsList
  //   MAIN_ROUTE_NAMES,
  //   MainParamsList,
  //   ROOT_ROUTE_NAMES,
  //   RootParamsList,
  //   APP_ROUTE_NAMES,
  //   AppParamsList,
  //   DASHBOARD_ROUTE_NAMES,
  //   DashboardParamsList,
  //   EVENTS_ROUTE_NAMES,
  //   EventsParamsList,
  //   COMMUNITIES_ROUTE_NAMES,
  //   CommunitiesParamsList,
  //   SEARCH_ROUTE_NAMES,
  //   SearchParamsList,
  //   PROFILE_ROUTE_NAMES,
  //   ProfileParamsList
} from '@/app/navigation';
import { DASHBOARD_ROUTE_NAMES } from '@/features/dashboard';

type RouteName = BASE_ROUTE_NAMES;
//   | MAIN_ROUTE_NAMES
//   | ROOT_ROUTE_NAMES
//   | APP_ROUTE_NAMES
//   | DASHBOARD_ROUTE_NAMES
//   | EVENTS_ROUTE_NAMES
//   | COMMUNITIES_ROUTE_NAMES
//   | SEARCH_ROUTE_NAMES
//   | PROFILE_ROUTE_NAMES;

type Params = BaseParamsList[keyof BaseParamsList];
//   | MainParamsList[keyof MainParamsList]
//   | RootParamsList[keyof RootParamsList]
//   | AppParamsList[keyof AppParamsList]
//   | DashboardParamsList[keyof DashboardParamsList]
//   | EventsParamsList[keyof EventsParamsList]
//   | CommunitiesParamsList[keyof CommunitiesParamsList]
//   | SearchParamsList[keyof SearchParamsList]
//   | ProfileParamsList[keyof ProfileParamsList];

interface RouteNameParams {
  screen: RouteName;
  params?: RouteNameParams | Params;
}

export const useGoBack = (routeName?: RouteName, params?: RouteNameParams) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const state = useNavigationState((state) => state);

  const canBack = useMemo(() => {
    const isCanGoBack = navigation.canGoBack();

    const activeRouteName = getActiveRouteName(state);

    if (activeRouteName === DASHBOARD_ROUTE_NAMES.Dashboard) {
      return false;
    }
    return isCanGoBack;
  }, [navigation, state]);

  const goToScreen = useCallback(() => {
    if (!routeName) {
      return;
    }
    navigation.navigate(routeName, params);
  }, [navigation, routeName, params]);

  const goBackToScreen = useCallback(() => {
    if (!canBack) {
      return goToScreen();
    }

    navigation.goBack();
  }, [navigation, canBack, goToScreen]);

  return {
    goBack: goBackToScreen,
    canBack: canBack || routeName
  };
};
