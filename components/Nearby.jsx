import { View, Text } from 'react-native'
import React from 'react'
import { nearby } from '../assets'
import { Image } from 'react-native'

const Nearby = () => {
  return (
	<View className="flex items-center w-full mt-3">
		<View className="flex-row items-center justify-between w-full mb-2">
			<Text className="text-2xl font-semibold">Nearby</Text>
			<Text className="text-xl font-semibold text-gray-400">View All</Text>
		</View>
		<View className="bg-indigo-500 w-full h-48 p-3 rounded-lg mt-2 shadow">
			<Image source={nearby} className="w-full h-full" />
		</View>
	</View>
  )
}

export default Nearby