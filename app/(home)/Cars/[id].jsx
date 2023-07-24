import {
	Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,} from 'react-native'
import React, { useContext } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { CarsContext } from '../../../contexts/CarContextProvider';
import Card from '../../../components/Card';

const DetailPage = () => {
	const { id } = useLocalSearchParams();
	const { carData } = useContext(CarsContext)
	//console.log("carData is : ", carData)
	const car = carData.filter( car => car.id === id )

	const height = Dimensions.get("screen").height

	//console.log("the car is : ", car)

  return (
	car.map( car => (	
		<SafeAreaView key={car.id} className="flex-1 items-center" style={{height : height}}>
		<View className="w-full h-[45%] bg-gray-200 bg-opacity-10 flex items-center justify-center">
			<Image source={{ uri : car.image }} className="w-full h-full object-contain" resizeMode='contain' />
		</View>
		<View className="flex-1 items-center rounded-t-[50px] bg-white h-full w-full -mt-10 ">
			<View className="mt-10 flex justify-center border-b border-gray-300 w-full px-5">
				<Text className="text-xl font-semibold mb-2 text">{car.name}</Text> 
				<Text className="mb-4 text-gray-400">{car.description}</Text>
			</View>
			<View className="self-start px-5 mb-6">
				<Text className="text-xl font-semibold my-2">Specification</Text>
				<View className="flex-row justify-between items-center w-full">
					<Card title="Capacity" specs={car.seats} iconName="seat"/>
					<Card title="Engine Out" specs={car.engineOut} iconName="horse-variant-fast"/>
					<Card title="Max Speed" specs={car.maxSpeed} iconName="speedometer"/>
				</View>
			</View>
			<View className="flex-1 items-center rounded-t-[30px] bg-[#26272D] h-full w-full pt-3 ">
				<View className="flex-row justify-between w-full px-5 my-5">
					<Text className="text-gray-300 font-semibold">
						Rental Price
					</Text>
					<Text className="text-base text-white font-semibold">
						${car.rentalPrice}/hour
					</Text>
				</View>	
				<View className="flex items-center rounded-[30px] bg-white h-full w-full justify-center">
					<TouchableOpacity className="rounded-full p-4 bg-blue-600 w-[80%] items-center justify-center">
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