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
  Home: "home",
  Cars: "cars",
  Profile: "profile",
  Cart: "cart",
};

export const route = {
  Home: "home",
  Cars: "cars",
  Profile: "profile",
  Cart: "cart",
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
            paddingHorizontal: 20,
            marginHorizontal: 10,
            backgroundColor: "#26272D",
            height: 60,
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === screens.Home) {
              iconName = focused ? "apps" : "apps-outline";
            } else if (route.name === screens.Cars) {
              iconName = focused ? "car-sport" : "car-sport-outline";
            } else if (route.name === screens.Profile) {
              iconName = focused ? "ios-person" : "ios-person-outline";
            } else if (route.name === screens.Cart) {
              iconName = focused ? "cart" : "cart-outline";
            }

            return <Ionicons name={iconName} size={22} color="white" />;
          },
        })}
      >
        <Tabs.Screen name={screens.Home} options={{ tabBarLabel: "Tab1" }} />
        <Tabs.Screen name={screens.Cars} options={{ tabBarLabel: "Tab2" }} />
        <Tabs.Screen name={screens.Cart} options={{ tabBarLabel: "Tab1" }} />
        <Tabs.Screen name={screens.Profile} options={{ tabBarLabel: "Tab2" }} />
      </Tabs>
    </SafeAreaProvider>
  );
}
