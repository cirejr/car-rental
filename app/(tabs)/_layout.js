import { Tabs } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Tabs>
        <Tabs.Screen name="tab1" options={{ tabBarLabel: "Tab1" }} />
        <Tabs.Screen name="tab2" options={{ tabBarLabel: "Tab2" }} />
      </Tabs>
    </SafeAreaProvider>
  );
}
