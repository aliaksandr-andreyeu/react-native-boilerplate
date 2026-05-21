import { DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { ColorValue } from 'react-native';
import { rgba } from '@/shared/lib/theme';
import { isRTLLanguage } from '@/shared/lib/localization';
import { config } from '@/shared/config';

const { fonts } = config || {};

const isRTL = isRTLLanguage();

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

const colors: Colors = {
  black: {
    base: '#000000',
    rgba: (alpha?: number) => rgba(colors.black.base, alpha)
  },
  white: {
    base: '#ffffff',
    rgba: (alpha?: number) => rgba(colors.white.base, alpha)
  },
  blue: {
    '100': '#060A37',
    '200': '#0B1043',
    '300': '#202873',
    '400': '#6C7AFF',
    '500': '#BCBECD'
  },
  red: {
    '100': '#660504',
    '200': '#C30907'
  },
  yellow: {
    '100': '#D4A621',
    '200': '#FDC82F'
  },
  gray: {
    '100': '#121212',
    '200': '#1c1c1c',
    '300': '#202020',
    '400': '#555555',
    '500': '#8C9091',
    '600': '#D9D9D9',
    '700': '#EDEDED',
    '800': '#F3F3F3'
  }
} as const;

interface ThemeColors {
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
  primary: string;
  secondary: string;
  accent: string;
}

type FontStyle = {
  fontFamily: string;
  fontWeight: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
};

interface ThemeFonts {
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

const lightColors: ThemeColors = {
  background: colors.gray['800'] as string,
  card: colors.gray['700'] as string,
  text: colors.blue['300'] as string,
  border: colors.gray['500'] as string,
  notification: colors.yellow['200'] as string,
  primary: colors.blue['300'] as string,
  secondary: colors.gray['500'] as string,
  accent: colors.red['200'] as string
};

const lightPalette: ThemePalette = {
  colors,
  shadow: colors.black.base,
  icon: {
    primary: colors.blue['300'],
    secondary: colors.gray['400'],
    accent: colors.yellow['200'],
    header: colors.blue['300']
  },
  background: {
    primary: colors.gray['800'],
    secondary: colors.gray['700'],
    modal: rgba(colors.blue['100'], 80),
    drawer: colors.blue['300'],
    header: colors.white.base,
    headerTitle: colors.yellow['200'],
    tabBar: colors.white.base,
    tabBarShadow: colors.white.rgba(16)
  },
  text: {
    primary: colors.blue['300'],
    secondary: colors.gray['400'],
    inverted: colors.white.base,
    headerTitle: colors.blue['300']
  },
  link: {
    white: {
      default: colors.white.base,
      focused: colors.blue['500']
    },
    yellow: {
      default: colors.yellow['200'],
      focused: colors.yellow['100']
    },
    red: {
      default: colors.red['200'],
      focused: colors.red['100']
    },
    blue: {
      default: colors.blue['300'],
      focused: colors.blue['200']
    },
    gray: {
      default: colors.gray['400'],
      focused: colors.gray['300']
    }
  }
};

const darkColors: ThemeColors = {
  background: colors.gray['100'] as string,
  card: colors.gray['300'] as string,
  text: colors.blue['300'] as string,
  border: colors.gray['400'] as string,
  notification: colors.yellow['100'] as string,
  primary: colors.blue['300'] as string,
  secondary: colors.gray['200'] as string,
  accent: colors.red['200'] as string
};

const darkPalette: ThemePalette = {
  colors,
  shadow: colors.white.base,
  icon: {
    primary: colors.blue['400'],
    secondary: colors.gray['400'],
    accent: colors.yellow['100'],
    header: colors.blue['300']
  },
  background: {
    primary: colors.gray['100'],
    secondary: colors.gray['100'],
    modal: rgba(colors.blue['500'], 80),
    drawer: colors.blue['300'],
    header: colors.gray['100'],
    headerTitle: colors.yellow['100'],
    tabBar: colors.gray['100'],
    tabBarShadow: colors.white.rgba(8)
  },
  text: {
    primary: colors.blue['400'],
    secondary: colors.gray['600'],
    inverted: colors.black.base,
    headerTitle: colors.blue['300']
  },
  link: {
    white: {
      default: colors.white.base,
      focused: colors.blue['500']
    },
    yellow: {
      default: colors.yellow['200'],
      focused: colors.yellow['100']
    },
    red: {
      default: colors.red['200'],
      focused: colors.gray['100']
    },
    blue: {
      default: colors.blue['300'],
      focused: colors.gray['200']
    },
    gray: {
      default: colors.gray['400'],
      focused: colors.gray['300']
    }
  }
};

export interface UserTheme extends Theme {
  palette: ThemePalette;
  fonts: ThemeFonts;
}

const lightThemeFonts: ThemeFonts = {
  regular: {
    fontFamily: isRTL ? fonts.rubik.regular : fonts.montserrat.medium,
    fontWeight: '400'
  },
  medium: {
    fontFamily: isRTL ? fonts.rubik.medium : fonts.montserrat.bold,
    fontWeight: '400'
  },
  bold: {
    fontFamily: isRTL ? fonts.rubik.bold : fonts.montserrat.extraBold,
    fontWeight: '400'
  },
  heavy: {
    fontFamily: isRTL ? fonts.rubik.extraBold : fonts.montserrat.black,
    fontWeight: '400'
  }
};

const darkThemeFonts: ThemeFonts = {
  regular: {
    fontFamily: isRTL ? fonts.rubik.regular : fonts.montserrat.medium,
    fontWeight: '400'
  },
  medium: {
    fontFamily: isRTL ? fonts.rubik.regular : fonts.montserrat.medium,
    fontWeight: '400'
  },
  bold: {
    fontFamily: isRTL ? fonts.rubik.medium : fonts.montserrat.bold,
    fontWeight: '400'
  },
  heavy: {
    fontFamily: isRTL ? fonts.rubik.bold : fonts.montserrat.extraBold,
    fontWeight: '400'
  }
};

const lightTheme: UserTheme = {
  ...DefaultTheme,
  colors: lightColors,
  palette: lightPalette,
  fonts: {
    ...DefaultTheme.fonts,
    ...lightThemeFonts
  }
};

const darkTheme: UserTheme = {
  ...DarkTheme,
  colors: darkColors,
  palette: darkPalette,
  fonts: {
    ...DarkTheme.fonts,
    ...darkThemeFonts
  }
};

export const baseTheme = {
  lightTheme,
  darkTheme
} as const;

type BaseTheme = typeof baseTheme;

export const theme: Readonly<BaseTheme> = baseTheme;
