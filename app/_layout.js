import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";

import CarContextProvider from "../contexts/CarContextProvider";
import CartContextProvider from "../contexts/cartContext";

const clerkPublishabKey = process.env.CLERK_PUBLISHABLE_KEY;

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

const Layout = () => {
  return (
    <ClerkProvider publishableKey={clerkPublishabKey} tokenCache={tokenCache}>
      <CarContextProvider>
        <CartContextProvider>
          <Slot />
        </CartContextProvider>
      </CarContextProvider>
    </ClerkProvider>
  );
};

export default Layout;
