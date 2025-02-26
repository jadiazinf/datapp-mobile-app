import { createSlice } from "@reduxjs/toolkit";
import { AuthSliceProps, AuthState } from "@/src/auth/redux/types";

const initialState: AuthSliceProps = {
  authState: AuthState.UNAUTHENTICATED,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.authState = AuthState.AUTHENTICATED;
    },
    loading: (state) => {
      state.authState = AuthState.LOADING;
    },
    logout: (state) => {
      state.authState = AuthState.UNAUTHENTICATED;
    },
    error: (state) => {
      state.authState = AuthState.ERROR;
    },
  },
});

export const { login, logout, loading, error } = authSlice.actions;

export default authSlice.reducer;
