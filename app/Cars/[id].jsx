import {
	Dimensions,
	Image,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import React, { useContext } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { CarsContext } from '../../contexts/CarContextProvider';
import Card from '../../components/Card';
import { cartContext } from '../../contexts/cartContext';

const DetailPage = () => {
	const { id } = useLocalSearchParams();
	const { carData } = useContext(CarsContext)
	const { addToCart } = useContext(cartContext)
	const router = useRouter()
	//console.log("carData is : ", carData)
	const car = carData.filter(car => car.id === id)

	const height = Dimensions.get("screen").height
	const heightImage = height / 3
	const width = Dimensions.get("screen").width

	//console.log("the car is : ", car)

	return (
		car.map(car => (
			<SafeAreaView key={car.id} className="flex-1 items-center bg-gray-200 pt-5" style={{ height: height }}>
				<View className="flex-row justify-between items-center px-5 pt-5" style={{ width: width }}>
					<TouchableOpacity className="flex items-center justify-center rounded-full p-2 border border-gray-300" onPress={() => router.back()}>
						<MaterialCommunityIcons name="arrow-left-thin" size={24} color="black" />
					</TouchableOpacity>
					<TouchableOpacity className="flex items-center justify-center rounded-full p-2 border border-gray-300">
						<MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
					</TouchableOpacity>
				</View>
				<View className="w-full bg-opacity-10 flex items-center justify-center" style={{ height: heightImage }}>
					<Image source={{ uri: car.image }} className="w-full h-full object-contain" resizeMode='contain' />
				</View>
				<View className="flex-1 items-center rounded-t-[50px] bg-white h-full w-full -mt-10 ">
					<View className="mt-10 flex justify-center border-b border-gray-300 w-full px-5">
						<Text className="text-xl font-semibold mb-2 text">{car.name}</Text>
						<Text className="mb-4 text-gray-400">{car.description}</Text>
					</View>
					<View className="self-start px-5 mb-6">
						<Text className="text-xl font-semibold my-2">Specification</Text>
						<View className="flex-row justify-between items-center w-full">
							<Card title="Capacity" specs={car.seats} iconName="seat" />
							<Card title="Engine Out" specs={car.engineOut} iconName="horse-variant-fast" />
							<Card title="Max Speed" specs={car.maxSpeed} iconName="speedometer" />
						</View>
					</View>
					<View className="flex-1 items-center rounded-t-[30px] bg-[#26272D] h-full w-full pt-1 ">
						<View className="flex-row justify-between w-full px-5 my-5">
							<Text className="text-gray-300 font-semibold">
								Rental Price
							</Text>
							<Text className="text-base text-white font-semibold">
								${car.rentalPrice}/hour
							</Text>
						</View>
						<View className="flex-1 items-center rounded-t-[30px] bg-white h-full w-full justify-center">
							<TouchableOpacity className="rounded-full p-4 bg-indigo-600 w-[80%] items-center justify-center" onPress={() => addToCart(car)}>
								<Text className="text-lg text-white w-full text-center">Book Car</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</SafeAreaView>
		))
	)
}

export default DetailPage