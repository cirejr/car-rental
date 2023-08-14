import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import CarContextProvider from "../contexts/CarContextProvider";
import CartContextProvider from "../contexts/cartContext";

const Layout = () => {
  return (
    <CarContextProvider>
      <CartContextProvider>
        <Slot />
      </CartContextProvider>
    </CarContextProvider>
  );
};

export default Layout;
