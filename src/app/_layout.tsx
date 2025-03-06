import "@/src/config/lang/i18n";
import { Slot } from "expo-router";
import { GluestackUIProvider } from "@/src/components/ui/gluestack-ui-provider";
import { Provider } from "react-redux";
import { persistor, store } from "@/src/store/store";
import { PersistGate } from "redux-persist/integration/react";
import useTheme from "@/src/themes/hooks/use_theme";
import { SafeAreaView } from "react-native-safe-area-context";
import "@/global.css";

export default function RootLayout() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <ThemeWrapper>
          <SafeAreaView>
            <Slot />
          </SafeAreaView>
        </ThemeWrapper>
      </Provider>
    </PersistGate>
  );
}

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return <GluestackUIProvider mode={theme}>{children}</GluestackUIProvider>;
}
