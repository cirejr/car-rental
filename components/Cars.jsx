import { View, Text, ActivityIndicator } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import "url-search-params-polyfill";	
import Brands from './Brands';
import { Image } from 'react-native';
import CarContextProvider from '../contexts/CarContextProvider';
import { CarsContext } from '../contexts/CarContextProvider';

const Cars = () => {
	const { carData } = useContext(CarsContext)

	console.log(" car Data after useContext is : ",carData)

	if (!carData) {
		return <ActivityIndicator size="large" />;
	}

  return (
	<View className="flex w-screengit mt-3 "> 
		<View className="flex gap-2 w-full bg-slate-300 rounded-md items-center">{carData.map( car => (
			<View key={car.id} className="w-full items-center my-3 border-b-2 border-white">
				<Text className="text-2xl text-black">{car.name}</Text>
				<Image source={{uri : car.image }} className="rounded-md w-20 h-20"/>
			</View>
		))}</View>
	</View>
  )
}

export default Cars
