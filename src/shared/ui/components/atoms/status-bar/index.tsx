import { useMemo } from 'react';
import { ColorValue, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';

export enum BaseStatusBarStyle {
  Dark = 'dark-content',
  Light = 'light-content'
}

export interface BaseStatusBarProps {
  barStyle?: BaseStatusBarStyle;
  backgroundColor?: ColorValue;
}

export const BaseStatusBar = ({ barStyle, backgroundColor }: BaseStatusBarProps) => {
  const theme = useTheme();
  const { palette, dark } = theme || {};
  const {
    background: { header: bg }
  } = palette || {};

  const initialBarStyle = useMemo(() => {
    return dark ? BaseStatusBarStyle.Light : BaseStatusBarStyle.Dark;
  }, [dark]);

  const statusBarStyle = barStyle || initialBarStyle;
  const statusBackgroundColor = backgroundColor || bg;

  return <StatusBar backgroundColor={statusBackgroundColor} barStyle={statusBarStyle} translucent={true} />;
};
