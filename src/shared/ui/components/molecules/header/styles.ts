import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { config } from '@/shared/config';
import { UserTheme } from '@/shared/lib/theme';

const {
  components: {
    headerBar: { height: headerBarHeight }
  }
} = config || {};

interface Styles {
  container: ViewStyle;
  header: ViewStyle;
  menu: ViewStyle;
  emptyMenu: ViewStyle;
  icon: ViewStyle;
  title: TextStyle;
  headerTitleBg: ViewStyle;
  headerTitleAngle: ViewStyle;
}

export const useStyles = (theme: UserTheme) => {
  const { top: paddingTop, left: paddingLeft, right: paddingRight } = useSafeAreaInsets();

  const height = headerBarHeight + paddingTop;

  const {
    palette: { background }
  } = theme || {};

  return StyleSheet.create<Styles>({
    container: {
      paddingTop,
      paddingLeft,
      paddingRight,
      backgroundColor: background.header,
      height,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    header: {
      flexDirection: 'row',
      flexGrow: 0,
      flexShrink: 1,
      alignItems: 'center'
    },
    menu: {
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    emptyMenu: {
      flex: 1,
      width: 20
    },
    icon: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      flexGrow: 0,
      flexShrink: 1
    },
    headerTitleBg: {
      flexDirection: 'row',
      height: 36,
      backgroundColor: background.headerTitle,
      flexGrow: 0,
      flexShrink: 1,
      paddingHorizontal: 20,
      gap: 16,
      alignItems: 'center'
    },
    headerTitleAngle: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 0,
      borderRightWidth: 36,
      borderTopWidth: 36,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderTopColor: background.headerTitle
    }
  });
};
