import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { CarsContext } from '../contexts/CarContextProvider'
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TopDeals = () => {
	const { carData, width, height } = useContext(CarsContext);
	const boxWidth = 5 * width/6
	const imageWidth = 3 * width/5
	const imageHeight = 2 * height/5

  return (
	<View className={`flex-1 items-center w-full mt-5 mb-16`}>
		<View className="flex-row items-center justify-between w-full">
			<Text className="text-2xl font-semibold">Top Deals</Text>
			<Text className="text-xl font-semibold text-gray-400">View All</Text>
		</View>
		<View className="flex items-center mt-2 py-4 space-y-2 w-full">
			{carData.map( car => (
				<View key={car.id} className={`w-full bg-gray-200 rounded-lg h-40`}>
					<View className="h-2/3 flex-row">
						<View className="w-1/4 p-2 items-center justify-center mt-2">
							<Image source={{uri : car.brandImage}} className="rounded-full w-4 h-4" resizeMode='cover'/>
							<Text className="text-base font-semibold">{car.name}</Text>
							<Text className="text-base font-semibold">{car.brand}</Text>
						</View>
						<View className=" w-3/4">
							<Image 
								source={{ uri : car.image}}
								resizeMode='contain'
								className="w-full h-full"
							/>
						</View>
					</View>
					<View className="h-1/3 flex-row items-center space-x-2 ">
						<View className="justify-center p-1 bg-gray-300 w-1/3 rounded-bl-lg items-center">
							<Text className="">1 day rental</Text>
							<Text className="text-lg font-semibold">${car.rentalPrice}</Text>
						</View>
						<TouchableOpacity className="flex-row items-center justify-center space-x-2 py-1 rounded-full w-2/3">
							<Text className="text-lg font-semibold items-center">Book The Car Now</Text>
							<Ionicons name="add-outline" size={15} color="black" />
						</TouchableOpacity>
					</View>
				</View>
			))}
		</View>
	</View>
  )
}

export default TopDeals