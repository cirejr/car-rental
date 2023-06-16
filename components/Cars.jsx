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
			const { cars } = await response.json();
			console.log(cars)
			if (cars && cars.length > 0) {
				setcarData(cars);
				setcarData(cars);
				setIsLoading(false);
			}
		} catch (error) {
			console.error(error);	
		}
	};

	useEffect(() => {
		fetchData();
		console.log(carData)
	}, [url]);

	if(isLoading){
		return (
			<ActivityIndicator size="large"  />
		)
	}

  return (
	<View className="px-5 w-full"> 
		<View className="flex-row gap-2 w-full">{carData.map( car => {
			const imageUrl = car.image;
			<Image key={car.id} source={{ uri: imageUrl }} className="w-20 h-20 image object-cover rounded-full" />
		})}</View>
	</View>
  )
}

export default Cars
