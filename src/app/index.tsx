import { useAuth } from "@/src/auth/hooks/use_auth";
import { AuthState } from "@/src/auth/redux/types";
import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const { authState } = useAuth();

  if (authState === AuthState.AUTHENTICATED)
    return (
      <View>
        <Text>Authenticated</Text>
      </View>
    );

  if (authState === AuthState.UNAUTHENTICATED)
    return <Redirect href="/(auth)/signin" />;

  if (authState === AuthState.ERROR)
    return (
      <View>
        <Text>Authentication Error</Text>
      </View>
    );

  if (authState === AuthState.LOADING)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );

  return (
    <View>
      <Text>Unknown Error on main</Text>
    </View>
  );
}
