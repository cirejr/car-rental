import { Tabs, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

{
  /*const routes = {
	HOME : 'home',
	BOOKMARKS: 'bookmarks',
	CATEGORIES: 'categories',
	PROFILE : 'profile'
}*/
}

export const screens = {
  Tab1: "tab1",
  Tab2: "tab2",
};

export const route = {
  Tab1: "tab1",
  Tab2: "tab2",
};

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarStyle: {
            position: "absolute",
            borderRadius: 25,
            bottom: 15,
            paddingVertical: 5,
            marginHorizontal: 10,
            backgroundColor: "indigo",
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === screens.Tab1) {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === screens.Tab2) {
              iconName = focused ? "bookmark" : "bookmark-outline";
            }

            return <Ionicons name={iconName} size={22} color="white" />;
          },
        })}
      >
        <Tabs.Screen name={screens.Tab1} options={{ tabBarLabel: "Tab1" }} />
        <Tabs.Screen name={screens.Tab2} options={{ tabBarLabel: "Tab2" }} />
      </Tabs>
    </SafeAreaProvider>
  );
}
