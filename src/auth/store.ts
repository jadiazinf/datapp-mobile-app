import * as SecureStore from "expo-secure-store";

const AUTH_TOKEN_KEY = "authToken";

async function saveInAuthStore(token: string): Promise<boolean> {
  try {
    await SecureStore.setItemAsync(AUTH_TOKEN_KEY, token);
    return true;
  } catch (error) {
    console.error(`Error on save in auth storage: ${error}`);
    return false;
  }
}

async function getFromAuthStore(): Promise<string | null> {
  try {
    return await SecureStore.getItemAsync(AUTH_TOKEN_KEY);
  } catch (error) {
    console.error(`Error on get from auth storage: ${error}`);
    return null;
  }
}

async function removeFromAuthStore(): Promise<boolean> {
  try {
    await SecureStore.deleteItemAsync(AUTH_TOKEN_KEY);
    return true;
  } catch (error) {
    console.error(`Error on remove from auth storage: ${error}`);
    return false;
  }
}

export const AuthStoreHelpers = {
  saveInAuthStore,
  getFromAuthStore,
  removeFromAuthStore,
};
