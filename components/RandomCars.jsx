import { View, Text, Image } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import { CarsContext } from '../contexts/CarContextProvider'

const RandomCars = () => {
	const {randomCars} = useContext(CarsContext)
	//console.log("randomCar is : ", randomCars)
  return (
	<View className="flex items-center w-full">
		<View className="flex-row items-center justify-between w-full">
			<Text className="text-2xl font-semibold">Best Cars</Text>
			<Text className="text-xl font-semibold text-gray-400">View All</Text>
		</View>
		<View className="flex-row w-full items-center justify-between">
			{randomCars.map( car => (
				<View key={car.id} className="flex mt-2 drop-shadow-lg rounded-lg w-[47%] h-48 bg-slate-500">
					<Image source={{uri : car.image }} className="w-full h-1/2 object-cover rounded-t-lg"/>
					<View className="flex w-full h-1/2 p-2">
						<Text className="text-2xl font-semibold ">{car.name}</Text>
						<Text className="text-base font-semibold ">{car.desription && car.description.length < 15}</Text>
					</View>
				</View>
			))}
		</View>
	</View>
  )
}

export default RandomCars