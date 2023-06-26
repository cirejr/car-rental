import { View, Text, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { CarsContext } from '../../../contexts/CarContextProvider';

const DetailPage = () => {
	const { id } = useLocalSearchParams();
	const { carData } = useContext(CarsContext)
	//console.log("carData is : ", carData)
	const car = carData.filter( car => car.id === id )

	//console.log("the car is : ", car)

  return (
	<SafeAreaView className="flex-1 items-center justify-center">
		
	</SafeAreaView>
  )
}

export default DetailPage