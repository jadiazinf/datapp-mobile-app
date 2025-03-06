import "@/src/config/lang/i18n";
import { Stack } from "expo-router";
import { GluestackUIProvider } from "@/src/components/ui/gluestack-ui-provider";
import { Provider } from "react-redux";
import { persistor, store } from "@/src/store/store";
import { PersistGate } from "redux-persist/integration/react";
import useTheme from "@/src/themes/hooks/use_theme";
import "@/global.css";

export default function RootLayout() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <ThemeWrapper>
          <Stack>
            <Stack.Screen
              name="index"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
        </ThemeWrapper>
      </Provider>
    </PersistGate>
  );
}

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return <GluestackUIProvider mode={theme}>{children}</GluestackUIProvider>;
}
