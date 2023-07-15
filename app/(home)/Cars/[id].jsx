import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,} from 'react-native'
import React, { useContext } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { CarsContext } from '../../../contexts/CarContextProvider';
import { hero } from '../../../assets';
import { Link } from "expo-router";

const DetailPage = () => {
	const { id } = useLocalSearchParams();
	const { carData } = useContext(CarsContext)
	//console.log("carData is : ", carData)
	const car = carData.filter( car => car.id === id )

	//console.log("the car is : ", car)

  return (
	car.map( car => (	
		<SafeAreaView key={car.id} className="flex-1 items-center">
		<View className="w-full h-[45%] bg-gray-200 bg-opacity-10 flex items-center justify-center">
			<Image source={{ uri : car.image }} className="w-full h-full object-contain" />
		</View>
		<View className="flex-1 items-center rounded-t-[50px] bg-white h-full w-full -mt-10 px-5">
			<View className="mt-10 flex justify-center border-b border-gray-300 w-full">
				<Text className="text-xl font-semibold mb-2 text">{car.name}</Text> 
				<Text className="mb-4 text-gray-400">{car.description}</Text>
			</View>
			<View >

			</View>
		</View>
		</SafeAreaView>
	))
  )
}

export default DetailPage