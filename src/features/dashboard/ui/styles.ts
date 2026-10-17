import { StyleSheet, ViewStyle } from 'react-native';
import { UserTheme } from '@/shared';

interface Styles {
  safe: ViewStyle;
}

export const useStyles = (theme: UserTheme) => {
  const { palette } = theme || {};

  return StyleSheet.create<Styles>({
    safe: {
      flexGrow: 1,
      backgroundColor: palette.background.drawer //mockup
    }
  });
};
