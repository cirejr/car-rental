import { View, Text } from "react-native";
import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const carContext = createContext();

const cartContextProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState(
    AsyncStorage.getItem("cartItems")
      ? JSON.parse(AsyncStorage.getItem("cartItems"))
      : [],
  );

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

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if ((isItemInCart.quantity = 1)) {
      setcartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setcartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: quantity - 1 }
            : cartItem,
        ),
      );
    }
  };

  const clearCart = () => {
    setcartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  useEffect(async () => {
    await AsyncStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(async () => {
    const cartItems = await AsyncStorage.getItem("cartItems");
    if (cartItems) {
      setcartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <carContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </carContext.Provider>
  );
};

export default cartContextProvider;
