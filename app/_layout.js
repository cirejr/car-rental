import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import CarContextProvider from "../contexts/CarContextProvider";

const Layout = () => {
  return (
    <CarContextProvider>
      <Slot />
    </CarContextProvider>
  );
};

export default Layout;
