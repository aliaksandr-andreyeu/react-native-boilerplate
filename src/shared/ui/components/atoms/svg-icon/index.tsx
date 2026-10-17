import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SvgXml, SvgProps } from 'react-native-svg';
import { useTheme } from '@react-navigation/native';

import { LogoIcon } from './icons/LogoIcon';
import { LogoLightIcon } from './icons/LogoLightIcon';
import { LogoDarkIcon } from './icons/LogoDarkIcon';

export enum SvgIconName {
  Logo = 'logo',
  ThemeLogo = 'theme-logo'
}

interface SvgXmlProps extends SvgProps {
  name: SvgIconName;
  size?: {
    width: number;
    height: number;
  };
  width?: number;
  height?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export const SvgIconSize = {
  xs: {
    width: 12,
    height: 12
  },
  sm: {
    width: 16,
    height: 16
  },
  md: {
    width: 20,
    height: 20
  },
  lg: {
    width: 24,
    height: 24
  },
  xl: {
    width: 32,
    height: 32
  }
};

const getIcon = (name: SvgIconName, isDark?: boolean): string | null => {
  if (!name) return null;
  switch (name) {
    case SvgIconName.Logo:
      return LogoIcon;
    case SvgIconName.ThemeLogo:
      return isDark ? LogoLightIcon : LogoDarkIcon;
  }
};

export const SvgIcon: FC<SvgXmlProps> = ({ name, size, width, height, color, style }) => {
  const theme = useTheme();

  const { colors, dark } = theme || {};

  const icon = getIcon(name, Boolean(dark));

  if (!icon) {
    return null;
  }

  const props = {
    ...(style && { style }),
    ...(size ? size : SvgIconSize.lg),
    ...(height && { height }),
    ...(width && { width }),
    preserveAspectRatio: 'xMidYMid meet',
    color: color || colors.primary
  };

  return <SvgXml xml={icon} {...props} />;
};
