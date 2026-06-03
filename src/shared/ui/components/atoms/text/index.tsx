import React, { FC, useMemo, ReactNode } from 'react';
import { ColorValue, Text, StyleSheet, TextProps, TextStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { UserTheme } from '@/shared/lib/theme';
// import { rest } from 'lodash';

export enum BaseTextVariant {
  CaptionH1 = 'caption-h1',
  CaptionH2 = 'caption-h2',
  CaptionH3 = 'caption-h3',
  TextP1 = 'text-p1',
  TextP2 = 'text-p2',
  TextP3 = 'text-p3',
  TextP4 = 'text-p4'
}

export interface BaseTextProps extends TextProps {
  style?: TextStyle | TextStyle[];
  children?: ReactNode;
  variant?: BaseTextVariant;
  color?: ColorValue;
  uppercase?: boolean;
  textCenter?: boolean;
}

export const BaseText: FC<BaseTextProps> = ({
  style,
  children,
  variant = BaseTextVariant.TextP3,
  color,
  uppercase,
  textCenter,
  ...rest
}) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const fontVariantStyle = useMemo(() => {
    const { fonts } = theme || {};
    const { regular, medium } = fonts || {};

    switch (variant) {
      case BaseTextVariant.CaptionH1:
        return {
          ...medium,
          fontSize: 16
        };
      case BaseTextVariant.CaptionH2:
        return {
          ...medium,
          fontSize: 14
        };
      case BaseTextVariant.CaptionH3:
        return {
          ...medium,
          fontSize: 12
        };
      case BaseTextVariant.TextP1:
        return {
          ...regular,
          fontSize: 16
        };
      case BaseTextVariant.TextP2:
        return {
          ...regular,
          fontSize: 14
        };
      case BaseTextVariant.TextP3:
        return {
          ...regular,
          fontSize: 12
        };
      case BaseTextVariant.TextP4:
        return {
          ...regular,
          fontSize: 10
        };
      default:
        return {};
    }
  }, [theme, variant]);

  const fontStyle = useMemo(() => {
    return {
      ...(uppercase && {
        textTransform: 'uppercase'
      }),
      ...(textCenter && {
        textAlign: 'center'
      }),
      ...(color && { color })
    };
  }, [uppercase, textCenter, color]);

  if (!children) {
    return null;
  }

  return (
    <Text style={[styles.container, fontVariantStyle, style, fontStyle]} {...rest}>
      {children}
    </Text>
  );
};

interface Styles {
  container: TextStyle;
}

const useStyles = (theme: UserTheme) => {
  const {
    palette: { text }
  } = theme || {};

  return StyleSheet.create<Styles>({
    container: {
      color: text.secondary,
      textAlignVertical: 'top'
    }
  });
};
