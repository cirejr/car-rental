import { Tabs, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@clerk/clerk-expo";
import { Pressable } from "react-native";

{
  /*const routes = {
	HOME : 'home',
	BOOKMARKS: 'bookmarks',
	CATEGORIES: 'categories',
	PROFILE : 'profile'
}*/
}

export const LogoutButton = () => {
  const { signOut } = useAuth()

  const doLogOut = () => {
    signOut()
  }

  return(
		<Pressable onPress={doLogOut} style={{ marginRight: 10 }}>
      <Ionicons name="log-out-outline" size={24} color={'#fff'} />
    </Pressable>
  )
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
  const { isSignedIn } = useAuth()
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
          tabBarVisible: route.name !== screens.Cart, // Conditional tabBarVisible
        })}
      >
        <Tabs.Screen name={screens.Home} />
        <Tabs.Screen name={screens.Cars} />
        <Tabs.Screen name={screens.Cart} />
        <Tabs.Screen name={screens.Profile} 
          options={{headerRight : () => <LogoutButton />}} 
          redirect={!isSignedIn}/>
        {/*<Tabs.Screen
          name="Cars/[id]"
          options={{
            href: null,
            tabBarStyle: false,
            headerLeft: {
              pressOpacity: true,
            },
          }}
        />*/}
      </Tabs>
    </SafeAreaProvider>
  );
}
