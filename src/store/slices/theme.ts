import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeScheme } from '@/shared';

interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: false
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeScheme>) => {
      state.isDarkMode = action.payload === ThemeScheme.Dark;
    },
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    }
  }
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
