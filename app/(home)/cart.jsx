
import { View, Text, SafeAreaView, TouchableOpacity, Image, Modal, ScrollView, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import CartContextProvider, { cartContext } from '../../contexts/cartContext'
import ItemCard from '../../components/ItemCard'
import { Link, useRouter } from 'expo-router'
import { MaterialCommunityIcons, Ionicons  } from '@expo/vector-icons';
import { CarsContext } from '../../contexts/CarContextProvider'

const Cart = () => {
	const [modalVisible, setModalVisible] = useState(false)
	const { removeFromcart, cartItems, clearCart, getCartTotal, addToCart } = useContext(cartContext)
	const { height } = useContext(CarsContext)
	const router = useRouter()

	const cartHeight = (2 *height)/3
	
	console.log("cart Items are :", cartItems)
	return (
		<SafeAreaView className="flex-1 w-full">
			<View className="h-40 w-full bg-indigo-400">
				<View className="flex-row justify-between items-center px-5 pt-5 w-full mt-5">
					<TouchableOpacity className="flex items-center justify-center rounded-full p-2 border border-gray-300" onPress={() => router.back()}>
						<MaterialCommunityIcons name="arrow-left-thin" size={24} color="white" />
					</TouchableOpacity>
					<Text className="text-2xl font-bold">My Cart</Text>
					<TouchableOpacity className="rounded-lg p-3 border border-white items-center justify-center w-1/3" onPress={() => clearCart()}>
						<Text className="w-full text-center text-base text-white">Clear cart</Text>
					</TouchableOpacity>
					{/* <TouchableOpacity 
						onPress={() => setModalVisible(true)}
						className="flex items-center justify-center rounded-full p-2 border border-gray-300">
						<MaterialCommunityIcons name="dots-horizontal" size={24} color="white" />
					</TouchableOpacity> */}
					<Modal
							animationType='slide'
							transparent='true'
							visible={modalVisible}
							onRequestClose={() => setModalVisible(!modalVisible)}
						>
							<View className="w-1/2 h-full">
								<TouchableOpacity onPress={() => clearCart()}>
									<Text> Clear Cart</Text>
								</TouchableOpacity>
							</View>
						</Modal>
				</View>
			</View>
			<ScrollView className="mt-[-50px] bg-white flex-1 rounded-t-[40px] z-10 pt-10 px-5 space-y-4" style={{height: cartHeight}}>
				{cartItems.length === 0 ? (
					<View className="flex-1 flex items-center justify-center" style={{height: cartHeight}}>
						<Text className=" text-3xl text-center w-full">No items in the cart !</Text>
					</View>
				) : ( cartItems.map(item => (
					<View key={item.id} className="h-32 w-full rounded-3xl bg-indigo-200 p-2 flex-row justify-between items-center">
						<View className="w-1/3 h-full">
							<Image source={{ uri: item.image }} resizeMode='contain' className="w-full h-full" />
						</View>
						<View className="h-full space-y-2 w-1/3 items-center justify-center">
							<Text className="text-lg font-semibold">{item.name}</Text>
							<Text className="text-lg font-semibold"> $ {item.rentalPrice}</Text>
						</View>
						<View className="h-full w-1/3 items-center justify-center space-y-1">
							<TouchableOpacity onPress={() => removeFromcart(item)}>
								<Text className="text-lg"> - </Text>
							</TouchableOpacity>
							<Text className="text-lg">{item.quantity}</Text>
							<TouchableOpacity onPress={() => addToCart(item)} className="rounded-full bg-indigo-300 px-2 py-1 items-center justify-center">
								<Text className="text-lg"> + </Text>
							</TouchableOpacity>
						</View>
					</View>
				)))}
			</ScrollView>
			<View className="h-60 w-full px-5 mt-[-50px] bg-indigo-400 rounded-t-[40px] z-10 space-y-2">
					<View className='flex-row items-center mt-4 px-2'>
						<Text className="text-2xl font-normal text-gray-200">Total : </Text>
					<Text className="text-2xl font-semibold text-white">${getCartTotal()}</Text>
					</View>
					<View className="flex-row items-start justify-between px-2 bg-white rounded-t-3xl pt-10 flex-1">
						<View className="flex-row ">
							<Text className="text-sm">$</Text>
							<Text className="text-2xl">{getCartTotal()} </Text>
						</View>
						<View
							className='flex-row items-center justify-center bg-indigo-200 rounded-lg px-3 py-2 space-x-1'>
							<Ionicons name="card" size={24} color="black" />
							<Link href={"/checkout/page"} disabled={ cartItems.length === 0 ? true : false}><Text>Check Out </Text></Link>
						</View>
					</View>
			</View>
		</SafeAreaView>
	)
}

export default Cart