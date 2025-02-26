import { useSelector } from "react-redux";
import { login, logout } from "@/src/auth/redux/slices";
import { RootState, useAppDispatch } from "@/src/store/store";
import { AuthStoreHelpers } from "@/src/auth/store";
import { AuthState } from "../redux/types";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const { authState } = useSelector((state: RootState) => state.auth);

  const { saveInAuthStore, removeFromAuthStore, getFromAuthStore } =
    AuthStoreHelpers;

  async function handleLogin(token: string) {
    const isTokenSaved = await saveInAuthStore(token);
    if (isTokenSaved) {
      dispatch(login());
      return;
    }

    throw new Error("Error saving token");
  }

  async function handleLogout() {
    if (authState === AuthState.UNAUTHENTICATED)
      throw new Error("User is not authenticated");

    const isTokenDeleted = await removeFromAuthStore();

    if (isTokenDeleted) dispatch(logout());
    else throw new Error("Error deleting token");
  }

  async function getToken() {
    const token = await getFromAuthStore();
    return token;
  }

  return {
    authState,
    handleLogin,
    handleLogout,
    getToken,
  };
};
