import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

export interface ThemeState {
  isLightTheme: boolean;
}
const initialState: ThemeState = {
  isLightTheme: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isLightTheme = !state.isLightTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectIsLightTheme = (state: RootState) =>
  state.theme.isLightTheme;

export default themeSlice.reducer;
