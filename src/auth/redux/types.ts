export enum AuthState {
  AUTHENTICATED,
  UNAUTHENTICATED,
  LOADING,
  ERROR,
}

export type AuthSliceProps = {
  authState: AuthState;
};
