import { StyleSheet, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  config,
  UserTheme
  // useCommonStyles
} from '@/shared';

const {
  components: {
    tabBar: { height: tabBarHeight }
  }
} = config;

interface Styles {
  container: ViewStyle;
  tab: ViewStyle;
  tabBtn: ViewStyle;
}

export const useStyles = (theme: UserTheme) => {
  // const { shadow4Style } = useCommonStyles(theme);
  const { bottom: paddingBottom, left: paddingLeft, right: paddingRight } = useSafeAreaInsets();

  const height = tabBarHeight + paddingBottom;

  const {
    palette: { background }
  } = theme || {};

  return StyleSheet.create<Styles>({
    container: {
      width: '100%',
      left: 0,
      right: 0,
      bottom: 0,
      height,
      paddingBottom,
      paddingRight,
      paddingLeft,
      flexDirection: 'row',
      backgroundColor: background.tabBar,
      justifyContent: 'space-between',
      alignItems: 'stretch',
      borderTopWidth: 0.5,
      borderTopColor: background.tabBarShadow
      // ...shadow4Style
    },
    tab: {
      flex: 1
    },
    tabBtn: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      paddingTop: 4
    }
  });
};
