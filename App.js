/**
 *
 * Serdar Ulutas
 * 2023-Sept-27
 *
 * https://mad9135.github.io/f2023/deliverables/assign.html#_2-react-native-app
 *
 */

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { PaperProvider } from "react-native-paper";
import Toast from "react-native-toast-message";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Users" }}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
      <Toast />
    </SafeAreaProvider>
  );
}
