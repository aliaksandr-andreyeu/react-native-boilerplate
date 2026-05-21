import { UserTheme } from '@/shared';

declare module '@react-navigation/native' {
  export function useTheme(): UserTheme;
}
