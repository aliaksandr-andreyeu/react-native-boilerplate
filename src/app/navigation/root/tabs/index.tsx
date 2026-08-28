import React, { FC, useCallback, ReactNode } from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator, BottomTabNavigationOptions, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useFocusEffect, useTheme, RouteProp } from '@react-navigation/native';
import {
  DASHBOARD_ROUTE_NAMES,
  DashboardStackNavigator
  //   EVENTS_ROUTE_NAMES,
  //   EventsStackNavigator,
  //   COMMUNITIES_ROUTE_NAMES,
  //   CommunitiesStackNavigator,
  //   SEARCH_ROUTE_NAMES,
  //   SearchStackNavigator,
  //   PROFILE_ROUTE_NAMES,
  //   ProfileStackNavigator
} from '@/features/dashboard';

import { ROOT_ROUTE_NAMES } from '@/app/navigation/root';
import { BaseIcon, BaseIconName, BaseIconSize, BaseTabBar } from '@/shared';

import { useTranslation } from 'react-i18next';
// import { useStyles } from './styles';

export enum APP_ROUTE_NAMES {
  Dashboard = 'DashboardScene',
  Events = 'EventsScene',
  Communities = 'CommunitiesScene',
  Search = 'SearchScene',
  Profile = 'ProfileScene'
}

export type AppParamsList = {
  DashboardScene: undefined;
  EventsScene: undefined;
  CommunitiesScene: undefined;
  SearchScene: undefined;
  ProfileScene: undefined;
};

const Tab = createBottomTabNavigator<AppParamsList>();

interface TabIconProps {
  focused: boolean;
  color: string;
  size: number;
}

const getTabBarIconName = (routeName: keyof AppParamsList) => {
  switch (routeName) {
    case APP_ROUTE_NAMES.Dashboard:
      return BaseIconName.Home;
    // case APP_ROUTE_NAMES.Events:
    //   return BaseIconName.Events;
    // case APP_ROUTE_NAMES.Communities:
    //   return BaseIconName.CommunitiesTop;
    // case APP_ROUTE_NAMES.Search:
    //   return BaseIconName.Search;
    // case APP_ROUTE_NAMES.Profile:
    //   return BaseIconName.User;
    default:
      return null;
  }
};

interface TabBarIconProps {
  color: string;
  size: number;
}

interface TabBarRouteIconProps extends TabBarIconProps {
  route: RouteProp<AppParamsList, keyof AppParamsList>;
}

const getTabBarIcon = ({ route, color, size }: TabBarRouteIconProps): ReactNode => {
  console.error('route', route);

  // let iconName;

  const { name: routeName } = route || {};

  const iconName = getTabBarIconName(routeName);

  return iconName ? (
    <BaseIcon
      name={iconName}
      // size={BaseIconSize.lg}
      size={size}
      color={color}
    />
  ) : null;
};

interface BottomTabScreenOptions {
  route: RouteProp<AppParamsList, keyof AppParamsList>;
}

export const TabNavigator: FC = () => {
  const { t } = useTranslation();

  const theme = useTheme();
  //   const styles = useStyles(theme);

  //   const { reset } = useAuthState();

  // const { palette } = theme || {};
  // const { icon } = palette || {};

  // if (route.name === 'Home') {
  //       iconName = focused
  //         ? 'ios-information-circle'
  //         : 'ios-information-circle-outline';
  //     } else if (route.name === 'Settings') {
  //       iconName = focused ? 'ios-list' : 'ios-list-outline';
  //     }

  //     // You can return any component that you like here!
  //     return <Ionicons name={iconName} size={size} color={color} />;

  //   <BaseIcon name={BaseIconName.Dashboard} size={24} color='blue' />
  // }

  // }

  const screenOptions = ({ route }: BottomTabScreenOptions): BottomTabNavigationOptions => ({
    popToTopOnBlur: true,
    tabBarActiveTintColor: '#ff0000', //icon.base.strong,
    tabBarInactiveTintColor: '#ff00ff', //icon.base.secondary,
    tabBarLabelPosition: 'below-icon',
    headerShown: false,
    tabBarIcon: ({ color, size }: TabBarIconProps): ReactNode => getTabBarIcon({ route, color, size })

    // unmountOnBlur: false,
    // tabBarItemStyle: styles.tabBarItemStyle,
    // tabBarLabelStyle: styles.tabBarLabelStyle,
    // tabBarStyle: styles.tabBarStyle
  });

  //   useFocusEffect(
  //     useCallback(() => {
  //       reset();
  //     }, [])
  //   );

  const tabBar = (props: BottomTabBarProps) => <BaseTabBar {...props} />;

  return (
    <Tab.Navigator
      initialRouteName={APP_ROUTE_NAMES.Dashboard}
      // initialRouteName={APP_ROUTE_NAMES.Profile}
      screenOptions={screenOptions}
      backBehavior={'history'}
      tabBar={tabBar}
    >
      <Tab.Screen
        name={APP_ROUTE_NAMES.Dashboard}
        component={DashboardStackNavigator}
        options={{
          tabBarLabel: t('navigation.tabs.dashboard')
        }}
      />
      {/**
      <Tab.Screen
        name={APP_ROUTE_NAMES.Events}
        component={EventsStackNavigator}
        options={{
          tabBarLabel: t('navigation.tabs.events')
        }}
      />
      <Tab.Screen
        name={APP_ROUTE_NAMES.Communities}
        component={CommunitiesStackNavigator}
        options={{
          tabBarLabel: t('navigation.tabs.communities')
        }}
      />
      <Tab.Screen
        name={APP_ROUTE_NAMES.Search}
        component={SearchStackNavigator}
        options={{
          tabBarLabel: t('navigation.tabs.search')
        }}
      />
      <Tab.Screen
        name={APP_ROUTE_NAMES.Profile}
        component={ProfileStackNavigator}
        options={{
          tabBarLabel: t('navigation.tabs.profile')
        }}
      /> */}
    </Tab.Navigator>
  );
};
