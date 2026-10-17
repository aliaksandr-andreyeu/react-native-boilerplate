import React, { useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useTheme, CommonActions } from '@react-navigation/native';
import { config, BaseIconSize, BaseTextVariant, BaseText } from '@/shared';
import { useStyles } from './styles';

const {
  components: {
    tabBar: {
      buttons: { activeOpacity, hitSlop }
    }
  }
} = config;

export const BaseTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const {
    palette: { icon }
  } = theme;

  const { routes: stateRoutes, index: stateIndex, key: stateKey } = state;

  const tabList = useMemo(
    () =>
      stateRoutes.map((route, index) => {
        const { name: routeName, key: routeKey } = route;
        const { options } = descriptors[routeKey];
        const { tabBarIcon, tabBarLabel } = options || {};

        const focused = Boolean(stateIndex === index);

        const color = (focused ? icon.primary : icon.secondary) as string;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: routeKey,
            canPreventDefault: true
          });

          if (!focused && !event.defaultPrevented) {
            navigation.dispatch({
              ...CommonActions.navigate({ name: routeName, merge: true }),
              target: stateKey
            });
          }
        };

        return (
          <View key={routeKey} style={styles.tab}>
            <TouchableOpacity onPress={onPress} style={styles.tabBtn} activeOpacity={activeOpacity} hitSlop={hitSlop}>
              {typeof tabBarIcon === 'function'
                ? tabBarIcon({
                    color,
                    focused,
                    size: BaseIconSize.lg
                  })
                : null}
              {tabBarLabel ? (
                <BaseText
                  variant={BaseTextVariant.TextP4}
                  textCenter={true}
                  color={color}
                  numberOfLines={1}
                  ellipsizeMode='middle'
                >
                  {tabBarLabel as string}
                </BaseText>
              ) : null}
            </TouchableOpacity>
          </View>
        );
      }),
    [navigation, stateRoutes, stateIndex, stateKey, descriptors, styles, icon]
  );

  return <View style={styles.container}>{tabList}</View>;
};
