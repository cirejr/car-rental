import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import "url-search-params-polyfill";	
import Brands from './Brands';
import { Image } from 'react-native';

//const url =`https://nf5r3it9.api.sanity.io/v1/data/query/production?query=*[_type == 'car']` ;
const url = '/api/db.json'

const Cars = () => {
	const [carData, setcarData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [carBrand, setcarBrand] = useState(null)

	const fetchData = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			console.log(data.cars)
			if (data.cars && data.cars.length > 0) {
				setcarData(data.cars);
			}
		} catch (error) {
			console.error(error);	
		}
	};

	useEffect(() => {
		if (!carData) {
			fetchData();
		}

		setIsLoading(false)
		console.log("carData in useEffect is : ", carData)
	}, [carData]);

	if(!carData){
		return (
			<ActivityIndicator size="large"  />
		)
	}

	console.log("carData before mapping is : " , carData)

  return (
	<View className="flex-2 w-full mt-3 "> 
		<View className="flex gap-2 w-full h-full bg-slate-500 rounded-md items-center">{carData.map( car => (
			<View key={car.id} className="w-full items-center my-3 border border-b-2 border-blue-400">
				<Text className="text-2xl text-black">{car.name}</Text>
				<Image source={{uri : car.image }} className="rounded-md w-20 h-20"/>
			</View>
		))}</View>
	</View>
  )
}

export default Cars
