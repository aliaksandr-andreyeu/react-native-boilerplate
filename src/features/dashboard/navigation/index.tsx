import React, { FC, useMemo } from 'react';
import { createStackNavigator, StackHeaderProps } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Dashboard } from '@/features/dashboard/ui';
import { BaseHeader } from '@/shared';

export enum DASHBOARD_ROUTE_NAMES {
  Dashboard = 'Dashboard'
}

export type DashboardParamsList = {
  Dashboard: undefined;
};

const Stack = createStackNavigator<DashboardParamsList>();
const screenOptions = {
  // popToTopOnBlur: true
  header: (props: StackHeaderProps) => <BaseHeader {...props} />
};

export const DashboardStackNavigator: FC = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator initialRouteName={DASHBOARD_ROUTE_NAMES.Dashboard} screenOptions={screenOptions}>
      <Stack.Screen
        name={DASHBOARD_ROUTE_NAMES.Dashboard}
        component={Dashboard}
        options={{
          headerTitle: t('screens.dashboard.title')
        }}
      />
    </Stack.Navigator>
  );
};
