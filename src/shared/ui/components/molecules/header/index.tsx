import React, { useMemo, useCallback, Fragment } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useTheme, NavigationProp, ParamListBase } from '@react-navigation/native';
import { StackHeaderProps, StackNavigationProp } from '@react-navigation/stack';
import { useDrawerStatus, DrawerNavigationProp } from '@react-navigation/drawer';
import { config } from '@/shared';
import {
  BaseIcon,
  BaseIconName,
  BaseText,
  BaseTextVariant,
  BaseStatusBar,
  BaseStatusBarProps,
  BaseStatusBarStyle,
  BaseIconSize
} from '@/shared';
import { useGoBack } from '@/shared/lib/navigation';
import { useStyles } from './styles';

const {
  components: {
    headerBar: {
      buttons: { activeOpacity, hitSlop }
    }
  }
} = config || {};

interface BaseHeaderProps extends StackHeaderProps {
  withStatusBar: boolean;
  statusBar: BaseStatusBarProps;
  withMenu: boolean;
  //  isClosable: boolean;
  // menu: () => void; /* Improvment */
  // onMenuPress: () => void; /* Improvment */
  isEmpty: boolean;
  title: string;
  backRoute: () => void;
  onBackPress: () => void;
}

const isDrawerNavigation = (
  el:
    | NavigationProp<ParamListBase>
    | StackNavigationProp<ParamListBase>
    | DrawerNavigationProp<ParamListBase>
    | undefined
): el is DrawerNavigationProp<ParamListBase> => {
  return (el as DrawerNavigationProp<ParamListBase>)?.toggleDrawer !== undefined;
};

export const BaseHeader = ({
  withStatusBar = true,
  statusBar,
  isEmpty = false,
  withMenu = true,
  options,
  navigation,
  ...rest
}: Partial<BaseHeaderProps>) => {
  const { headerTitle = '' } = options || {};

  const { barStyle, backgroundColor } = statusBar || {};

  const { goBack, canBack } = useGoBack();

  // useGoBack(BASE_ROUTE_NAMES.Base, {
  //   screen: MAIN_ROUTE_NAMES.Main,
  //   params: {
  //     screen: ROOT_ROUTE_NAMES.App,
  //     params: {
  //       screen: APP_ROUTE_NAMES.Dashboard,
  //       params: {
  //         screen: DASHBOARD_ROUTE_NAMES.Dashboard
  //       }
  //     }
  //   }
  // });

  const drawerStatus = useDrawerStatus();
  const isDrawerOpen = Boolean(drawerStatus === 'open');

  const theme = useTheme();
  const { palette } = theme || {};
  const styles = useStyles(theme);

  const { icon, text } = palette || {};

  const statusBarStyle = useMemo(() => {
    return isDrawerOpen ? BaseStatusBarStyle.Light : barStyle;
  }, [isDrawerOpen, barStyle]);

  const toggleDrawer = useCallback(() => {
    if (!isDrawerNavigation(navigation)) {
      return;
    }

    navigation.toggleDrawer();
  }, [navigation, isDrawerNavigation]);

  const menuComponent = useMemo(() => {
    if (!withMenu) {
      return <View style={styles.emptyMenu} />;
    }
    return (
      <View style={styles.menu}>
        <TouchableOpacity style={styles.icon} activeOpacity={activeOpacity} hitSlop={hitSlop} onPress={toggleDrawer}>
          <BaseIcon name={BaseIconName.Menu} size={BaseIconSize.lg} color={icon.primary} />
        </TouchableOpacity>
      </View>
    );
  }, [withMenu, styles, toggleDrawer, icon]);

  return (
    <Fragment>
      {withStatusBar ? <BaseStatusBar barStyle={statusBarStyle} backgroundColor={backgroundColor} /> : null}
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTitleBg}>
            {canBack ? (
              <TouchableOpacity style={styles.icon} activeOpacity={activeOpacity} hitSlop={hitSlop} onPress={goBack}>
                <BaseIcon name={BaseIconName.ArrowBack} size={BaseIconSize.lg} color={icon.header} />
              </TouchableOpacity>
            ) : null}
            <BaseText
              uppercase={true}
              variant={BaseTextVariant.CaptionH1}
              numberOfLines={1}
              ellipsizeMode='middle'
              color={text.headerTitle}
              style={styles.title}
            >
              {headerTitle as string}
            </BaseText>
          </View>
          <View style={styles.headerTitleAngle} />
        </View>
        {menuComponent}
      </View>
    </Fragment>
  );
};
