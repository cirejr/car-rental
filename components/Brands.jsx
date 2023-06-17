import { View, Text, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import { Image } from 'react-native'
import { CarsContext } from '../contexts/CarContextProvider'

const Brands = () => {
	const { carBrand, carData } = useContext(CarsContext)
	//console.log("carBrand in component is : ", carBrand)
	if (!carData) {
		return <ActivityIndicator size="large" />;
	}
  return (
	<View className=" flex-row gap-1 items-center justify-between w-full my-4">
		{carData.map( car => (
			<View key={car.brand} className="flex items-center" >
				<View className="p-3 bg-black rounded-full items-center">
					<Image source={{ uri : car.brandImage }} className="w-14 h-14 object-contain" />
				</View>
				<Text className="mt-1 font-semibold text-lg text-gray-500">{car.brand}</Text>
			</View>
		))}
	</View>
  )
}

export default Brands