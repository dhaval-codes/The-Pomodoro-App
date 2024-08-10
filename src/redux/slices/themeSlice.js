import { createSlice } from "@reduxjs/toolkit";
import { nativeTheme } from "electron";

const currentDeviceTheme = () => {
  const isDark = nativeTheme.shouldUseDarkColors;
  return isDark ? "dark" : "light";
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState: { theme: currentDeviceTheme() },
  reducers: {
    updateTheme: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
