import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import CartContextProvider, { cartContext } from '../../contexts/cartContext'

const Cart = () => {
	const { removeFromcart, cartItems, clearCart, getCartTotal, addToCart } = useContext(cartContext)

	console.log("cart Items are :", cartItems)
	return (
		<View>
			<Text>Cart</Text>
		</View>
	)
}

export default Cart