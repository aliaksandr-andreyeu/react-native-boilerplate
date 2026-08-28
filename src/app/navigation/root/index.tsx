import React, { FC, useLayoutEffect, useMemo, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigator } from './tabs';
// import { SignIn, SignUp, EmailSignUp, ForgotPassword } from '@/screens';

export enum ROOT_ROUTE_NAMES {
  App = 'App',
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  EmailSignUp = 'EmailSignUp',
  ForgotPassword = 'ForgotPassword'
}

export type RootParamsList = {
  App: undefined;
  SignIn: undefined;
  SignUp: undefined;
  EmailSignUp: undefined;
  ForgotPassword: undefined;
};

const Stack = createStackNavigator<RootParamsList>();

const screenOptions = {
  headerShown: false
};

export const RootNavigation: FC = () => {
  const isAuthorized = true;
  return (
    <Stack.Navigator initialRouteName={ROOT_ROUTE_NAMES.App} screenOptions={screenOptions}>
      <Stack.Screen name={ROOT_ROUTE_NAMES.App} component={TabNavigator} />
      {/**
      <Stack.Screen name={ROOT_ROUTE_NAMES.SignIn} component={SignIn} />
      <Stack.Screen name={ROOT_ROUTE_NAMES.SignUp} component={SignUp} />
      <Stack.Screen name={ROOT_ROUTE_NAMES.EmailSignUp} component={EmailSignUp} />
      <Stack.Screen name={ROOT_ROUTE_NAMES.ForgotPassword} component={ForgotPassword} />
       */}
    </Stack.Navigator>
  );
};
