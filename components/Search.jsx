import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from "@expo/vector-icons";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(query);
  };
  
  return (
      <View className="flex-row bg-white rounded-full items-center w-full p-2 gap-1 my-4">
        <AntDesign name="search1" size={24} color="black" />
        <TextInput
          clearButtonMode="always"
          placeholder="search your dream car..."
          value={searchQuery}
          onChangeText={(query) => handleSearch(query)}
          className=""
        />
      </View>
  )
}

export default Search