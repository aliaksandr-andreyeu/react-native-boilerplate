import { ColorValue } from 'react-native';

export const rgba = (color: string | ColorValue, alpha?: number): string => {
  if (!color) {
    throw new Error('Color is required.');
  }
  const hex = String(color).replace(/^#/, '');
  const bigint = parseInt(hex, 16);
  /* eslint-disable no-bitwise */
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  /* eslint-enable no-bitwise */
  const a = alpha !== undefined && alpha >= 0 && alpha <= 100 ? alpha / (alpha ? 100 : 1) : 1;
  const rgbaColor = [r, g, b, a].join(',');
  return `rgba(${rgbaColor})`;
};
