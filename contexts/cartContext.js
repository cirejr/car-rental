import { View, Text } from "react-native";
import React, { createContext, useState } from "react";

export const carContext = createContext();

const cartContextProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState([]);

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      setcartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItems, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      );
    } else {
      setcartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  return (
    <View>
      <Text>cartContext</Text>
    </View>
  );
};

export default cartContextProvider;
