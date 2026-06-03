import React, { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { DASHBOARD_ROUTE_NAMES, DashboardParamsList } from '@/features/dashboard/navigation';
import { DashboardScreen } from './screen';

type DashboardProps = StackScreenProps<DashboardParamsList, DASHBOARD_ROUTE_NAMES.Dashboard>;

interface DashboardData extends DashboardProps {}

export const Dashboard: FC<DashboardData> = ({ navigation, route }) => {
  return <DashboardScreen navigation={navigation} route={route} />;
};
