import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Slot, Stack, useRouter, useSegments } from "expo-router";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";

import CarContextProvider from "../contexts/CarContextProvider";
import CartContextProvider from "../contexts/cartContext";

const clerkPublishabKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const tokenCache = {
   
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    const inTabsGroup = segments[0] === "(home)";

    if (isSignedIn && !inTabsGroup) {
      router.replace("/home");
    } else if (!isSignedIn) {
      router.replace("/(auth)/login");
    }
  }, [isSignedIn]);

  return <Slot />;
};

const Layout = () => {
  return (
    <ClerkProvider publishableKey={clerkPublishabKey} tokenCache={tokenCache}>
      <CarContextProvider>
        <CartContextProvider>
          <InitialLayout />
        </CartContextProvider>
      </CarContextProvider>
    </ClerkProvider>
  );
};

export default Layout;
