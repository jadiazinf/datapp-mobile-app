export enum AuthState {
  AUTHENTICATED = "authenticated",
  UNAUTHENTICATED = "unauthenticated",
  LOADING = "loading",
  ERROR = "error",
}

export type AuthSliceProps = {
  authState: AuthState;
};
