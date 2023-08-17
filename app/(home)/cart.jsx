import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { cartContext } from '../../contexts/cartContext'

const Cart = () => {
	const { cartItems } = useContext(cartContext)
	console.log("cartItems are :", cartItems)
  return (
	cartItems.map( item => (
		<View className="flex-1 items-center justify-center bg-black">
			<Text>{item.id}</Text>
		</View>
	))
  )
}

export default Cart