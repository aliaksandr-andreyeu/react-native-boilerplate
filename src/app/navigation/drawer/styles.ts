import { StyleSheet, ViewStyle } from 'react-native';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';
import { UserTheme } from '@/shared';

interface DrawerStyles {
  drawer: ViewStyle;
  drawerScreen: ViewStyle;
  drawerHeader: ViewStyle;
  iconButton: ViewStyle;
  buttonBox: ViewStyle;
  scrollContentBox: ViewStyle;
  scrollBox: ViewStyle;
  drawerTheme: ViewStyle;
  drawerItem: ViewStyle;
  divider: ViewStyle;
  dividerBox: ViewStyle;
  signinBtn: ViewStyle;
  signupBtn: ViewStyle;
}

export const useStyles = (theme: UserTheme) => {
  const { width } = useSafeAreaFrame();
  const { top: paddingTop, bottom: paddingBottom } = useSafeAreaInsets();

  const { palette } = theme || {};

  const {
    colors: { gray },
    background: { drawer: backgroundColor }
  } = palette || {};

  return StyleSheet.create<DrawerStyles>({
    drawer: {
      paddingTop,
      backgroundColor,
      width,
      borderLeftColor: 'transparent',
      borderLeftWidth: 0,
      borderRightColor: 'transparent',
      borderRightWidth: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    },
    drawerScreen: {
      flexGrow: 1,
      flexShrink: 1,
      paddingBottom
    },
    drawerHeader: {
      height: 56,
      minHeight: 56,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 26,
      paddingRight: 4
    },
    iconButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 4,
      paddingHorizontal: 16
    },
    buttonBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 16,
      paddingVertical: 20,
      paddingHorizontal: 20
    },
    scrollContentBox: {
      paddingBottom: 18
    },
    scrollBox: {
      flexShrink: 1,
      paddingTop: 18
    },
    drawerTheme: {
      height: 52,
      flexDirection: 'row'
    },
    drawerItem: {
      height: 44,
      paddingHorizontal: 42,
      alignItems: 'center',
      gap: 24,
      flexDirection: 'row'
    },
    divider: {
      height: 1,
      backgroundColor: gray['500']
    },
    dividerBox: {
      paddingVertical: 8,
      paddingHorizontal: 42
    },
    signinBtn: {
      flex: 3
    },
    signupBtn: {
      flex: 6
    }
  });
};
