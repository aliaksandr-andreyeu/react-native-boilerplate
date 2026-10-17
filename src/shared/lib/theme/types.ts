import { ColorValue } from 'react-native';
import { type Theme } from '@react-navigation/native';

export interface Colors {
  black: {
    base: ColorValue;
    rgba: (alpha?: number) => ColorValue;
  };
  white: {
    base: ColorValue;
    rgba: (alpha?: number) => ColorValue;
  };
  blue: {
    '100': ColorValue;
    '200': ColorValue;
    '300': ColorValue;
    '400': ColorValue;
    '500': ColorValue;
  };
  red: {
    '100': ColorValue;
    '200': ColorValue;
  };
  yellow: {
    '100': ColorValue;
    '200': ColorValue;
  };
  gray: {
    '100': ColorValue;
    '200': ColorValue;
    '300': ColorValue;
    '400': ColorValue;
    '500': ColorValue;
    '600': ColorValue;
    '700': ColorValue;
    '800': ColorValue;
  };
}

export interface ThemeColors {
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
  primary: string;
  secondary: string;
  accent: string;
}

export type FontStyle = {
  fontFamily: string;
  fontWeight: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
};

export interface ThemeFonts {
  regular: FontStyle;
  medium: FontStyle;
  bold: FontStyle;
  heavy: FontStyle;
}

export interface LinkColor {
  default: ColorValue;
  focused: ColorValue;
}
export interface ThemePalette {
  colors: Colors;
  shadow: ColorValue;
  icon: {
    primary: ColorValue;
    secondary: ColorValue;
    accent: ColorValue;
    header: ColorValue;
  };
  background: {
    primary: ColorValue;
    secondary: ColorValue;
    modal: ColorValue;
    drawer: ColorValue;
    header: ColorValue;
    headerTitle: ColorValue;
    tabBar: ColorValue;
    tabBarShadow: ColorValue;
  };
  text: {
    primary: ColorValue;
    secondary: ColorValue;
    inverted: ColorValue;
    headerTitle: ColorValue;
  };
  link: {
    white: LinkColor;
    yellow: LinkColor;
    red: LinkColor;
    blue: LinkColor;
    gray: LinkColor;
  };
}

export interface UserTheme extends Theme {
  palette: ThemePalette;
  fonts: ThemeFonts;
}
