import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { cartContext } from '../contexts/cartContext'

const ItemCard = (name, id, imageUrl, price) => {
  return (
    <View className="bg-black opacity-70">
      <Text> {} </Text>
    </View>
  )
}

export default ItemCard