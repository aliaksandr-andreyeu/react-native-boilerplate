import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigator } from './drawer';

export enum BASE_ROUTE_NAMES {
  Base = 'Base'
}

export type BaseParamsList = {
  Base: undefined;
};

const Stack = createStackNavigator<BaseParamsList>();

const screenOptions = {
  headerShown: false
};

export const Router = () => {
  return (
    <Stack.Navigator initialRouteName={BASE_ROUTE_NAMES.Base} screenOptions={screenOptions}>
      <Stack.Screen name={BASE_ROUTE_NAMES.Base} component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export * from './drawer';

export * from './root';
export * from './root/tabs';
