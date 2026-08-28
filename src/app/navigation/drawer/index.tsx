import React, { FC, JSX } from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerNavigationOptions } from '@react-navigation/drawer';
import { DrawerScreen } from './screen';
import { useTheme } from '@react-navigation/native';
import { RootNavigation } from '@/app/navigation/root';
import { config } from '@/shared';
import { useStyles } from './styles';

const { isRTL } = config || {};

export enum MAIN_ROUTE_NAMES {
  Main = 'MainScene'
}

export type MainParamsList = {
  MainScene: undefined;
};

const Drawer = createDrawerNavigator<MainParamsList>();

const drawerContent = (props: DrawerContentComponentProps): JSX.Element | undefined => <DrawerScreen {...props} />;

export const DrawerNavigator: FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const screenOptions: DrawerNavigationOptions = {
    swipeEnabled: true,
    drawerStyle: styles.drawer,
    headerShown: false,
    drawerType: 'front',
    drawerPosition: isRTL ? 'left' : 'right',
    drawerStatusBarAnimation: 'slide'
  };

  return (
    <Drawer.Navigator
      initialRouteName={MAIN_ROUTE_NAMES.Main}
      drawerContent={drawerContent}
      screenOptions={screenOptions}
    >
      <Drawer.Screen name={MAIN_ROUTE_NAMES.Main} component={RootNavigation} />
    </Drawer.Navigator>
  );
};
