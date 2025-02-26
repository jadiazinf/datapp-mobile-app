import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authSlice from "@/src/auth/redux/slices";
import { useDispatch } from "react-redux";
import themeSlice from "@/src/themes/redux/slices";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth", "theme"],
};

const rootReducer = combineReducers({
  auth: authSlice,
  theme: themeSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
