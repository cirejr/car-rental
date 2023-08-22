import { View, Text, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import CartContextProvider, { cartContext } from '../../contexts/cartContext'
import ItemCard from '../../components/ItemCard'

const Cart = () => {
	const { removeFromcart, cartItems, clearCart, getCartTotal, addToCart } = useContext(cartContext)

	console.log("cart Items are :", cartItems)
	return (
		<SafeAreaView className="flex-1 w-full">
			<View className="h-40 w-full rounded-lg bg-indigo-400">

			</View>
			{cartItems.map( cartItem => <ItemCard name={cartItem.name} id={cartItem.id} imageUrl={cartItem.image} price={cartItem.rentalPrice}/>)}
		</SafeAreaView>
	)
}

export default Cart