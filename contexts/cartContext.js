import { View, Text } from "react-native";
import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState([]);

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      setcartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      );
    } else {
      setcartItems([...cartItems, { ...item, quantity: 1 }]);
    }

    console.log("item added to cart");
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
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
      (total, item) => total + item.rentalPrice * item.quantity,
      0,
    );
  };

  const getCartData = async () => {
    const cartItems = await AsyncStorage.getItem("cartItems");
    if (cartItems) {
      const parsedItems = JSON.parse(cartItems);
      setcartItems(parsedItems || []);
    } else {
      setcartItems([{ id: 1, name: "Car", price: 1000 }]);
    }
  };

  const storeCartData = async () => {
    await AsyncStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  useEffect(() => {
    getCartData();
  }, []);

  useEffect(() => {
    storeCartData();
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
