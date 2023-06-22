import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TabButton = (props) => {
  return <TouchableOpacity></TouchableOpacity>;
};
export default function Layout() {
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            borderRadius: 25,
            bottom: 15,
            paddingVertical: 5,
            marginHorizontal: 10,
            backgroundColor: "#26272E",
          },
          tabBarShowLabel: false,
          tabBarButton: (props) => <TabButton {...props} />,
        }}
      >
        <Tabs.Screen name="tab1" options={{ tabBarLabel: "Tab1" }} />
        <Tabs.Screen name="tab2" options={{ tabBarLabel: "Tab2" }} />
      </Tabs>
    </SafeAreaProvider>
  );
}
