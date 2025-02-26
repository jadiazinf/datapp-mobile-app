import { createSlice } from "@reduxjs/toolkit";
import { ThemeSliceProps, Themes } from "@/src/themes/redux/types";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";

const initialState: ThemeSliceProps = {
  theme: Themes.LIGHT,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.theme === Themes.LIGHT) state.theme = Themes.DARK;
      else state.theme = Themes.LIGHT;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
