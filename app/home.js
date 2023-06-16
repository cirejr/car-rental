import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

import Header from "../components/Header";
import Cars from "../components/Cars";

export default function home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(query);
  };

  return (
    <SafeAreaView className="flex-1 items-center gap-3 justify-center w-full px-2 bg-slate-200">
      <Header />
      <View className="flex-row bg-white rounded-full p-2 gap-1 w-full">
        <AntDesign name="search1" size={24} color="black" />
        <TextInput
          clearButtonMode="always"
          placeholder="search your dream car..."
          value={searchQuery}
          onChange={(query) => handleSearch(query)}
          className="w-full"
        />
      </View>
      <Cars />
    </SafeAreaView>
  );
}
