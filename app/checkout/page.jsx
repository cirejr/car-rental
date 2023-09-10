import { View, Text, SafeAreaView, Pressable, ScrollView, Image, TouchableOpacity} from 'react-native'
import React, { useContext, useState } from 'react'
import { Entypo, FontAwesome, Ionicons  } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import PaymentOptions from '../../components/checkout/paymentOptions';
import Cards from '../../components/checkout/Cards';
import { cartContext } from '../../contexts/cartContext';



const Page = () => {
  const router = useRouter()
  const { getCartTotal, cartItems } = useContext(cartContext)
  const discount = 0, vat = 14.99
  const totalCheckout = getCartTotal() + discount + vat

  return (
    <SafeAreaView className="flex-1">
      <View className="h-36 flex-row items-center justify-between px-5 bg-indigo-500 rounded-b-3xl">
        <Pressable onPress={() => router.back()}>
          <Entypo name="chevron-left" size={24} color="white" />
        </Pressable>
        <Text className="text-2xl font-semibold text-white">Checkout</Text>
        <Link href={'/cart'}>
          <FontAwesome name="shopping-basket" size={24} color="white" />
        </Link>
      </View>
      <PaymentOptions />
      <Cards />
      <View className="mt-6 bg-indigo-100 rounded-md p-4 w-auto mx-5">
        <Text className="text-base">CVV</Text>
      </View>
      <View className="px-5 w-auto mt-6 space-y-2 mb-5">
        <Text className="text-base">Apply Coupon <Text className='text-sm text-slate-500'>(if you have)</Text></Text>
        <View className="flex-row justify-between items-center border border-indigo-200 rounded-md px-3 py-2">
          <View className="flex-row space-x-2 w-auto items-center">
            <MaterialCommunityIcons name="brightness-percent" size={18} color="black" />
            <Text className="font-semibold">Apply Coupon</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={30} color="black" />
        </View>
      </View>
      <View className="bg-indigo-100 rounded-3xl flex-1 mt-5 pt-5">
        <View className="px-5 space-y-2">
          <View className="flex-row justify-between items-center">
            <Text className="font-semibold text-gray-500">Total</Text>
            <Text className="text-gray-500 font-semibold">$ {getCartTotal()}</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="font-semibold text-gray-500">Discount</Text>
            <Text className="text-gray-500 font-semibold">$ {discount}</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="font-semibold text-gray-500">Vat</Text>
            <Text className="text-gray-500 font-semibold">$ {vat}</Text>
          </View>
          <View className="flex-row justify-between items-center mt-2">
            <Text className="font-semibold text-lg">Grand Total </Text>
            <Text className="font-semibold text-lg">$ {totalCheckout}</Text>
          </View>
        </View>
        <View className="rounded-t-2xl mt-2 flex-1 flex-row bg-indigo-500 justify-between items-center px-5">
          <View className="flex-row border border-indigo-200 px-3 py-3 space-x-1 rounded-md items-center">
          <FontAwesome name="shopping-basket" size={13} color="white" />
          <Text className="text-white font-semibold"> {cartItems.length}</Text>
          </View>
          <TouchableOpacity className="bg-indigo-400 py-3 border border-indigo-400 w-3/4 rounded-md">
            <Text className="text-center text-white font-semibold">PAY NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Page