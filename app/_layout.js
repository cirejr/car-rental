import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { Constants } from "expo-constants";

import CarContextProvider from "../contexts/CarContextProvider";
import CartContextProvider from "../contexts/cartContext";

const Layout = () => {
  return (
    <ClerkProvider>
      <CarContextProvider>
        <CartContextProvider>
          <Slot />
        </CartContextProvider>
      </CarContextProvider>
    </ClerkProvider>
  );
};

export default Layout;
