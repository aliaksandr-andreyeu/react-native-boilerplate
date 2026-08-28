import themeReducer, { setTheme, toggleTheme } from '@/store/slices/theme';
import { ThemeScheme } from '@/shared';

describe('Theme Slice', () => {
  const initialState = {
    isDarkMode: false
  };

  it('should return the initial state', () => {
    const state = themeReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });

  describe('setTheme', () => {
    it('should set dark mode when Dark theme is set', () => {
      const previousState = initialState;
      const state = themeReducer(previousState, setTheme(ThemeScheme.Dark));
      expect(state.isDarkMode).toBe(true);
    });

    it('should set light mode when Light theme is set', () => {
      const previousState = { isDarkMode: true };
      const state = themeReducer(previousState, setTheme(ThemeScheme.Light));
      expect(state.isDarkMode).toBe(false);
    });
  });

  describe('toggleTheme', () => {
    it('should toggle from light to dark mode', () => {
      const previousState = { isDarkMode: false };
      const state = themeReducer(previousState, toggleTheme());
      expect(state.isDarkMode).toBe(true);
    });

    it('should toggle from dark to light mode', () => {
      const previousState = { isDarkMode: true };
      const state = themeReducer(previousState, toggleTheme());
      expect(state.isDarkMode).toBe(false);
    });
  });
});
