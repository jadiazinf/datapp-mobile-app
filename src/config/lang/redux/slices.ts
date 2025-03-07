import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LangSliceProps } from "@/src/config/lang/redux/types";
import { AppLanguages } from "@/src/config/lang/types";
import { LanguageHelpers } from "../helpers";

const initialState: LangSliceProps = {
  language: LanguageHelpers.getLanguageForAppByLocation(),
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setAppLanguage: (state, action: PayloadAction<AppLanguages>) => {
      state.language = action.payload;
    },
  },
});

export const { setAppLanguage } = langSlice.actions;

export default langSlice.reducer;
