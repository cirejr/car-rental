import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

import { getData } from '../api/getData'

const Cars = () => {
	const [carData, setcarData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		
		const fetchData = async () => {
			try {	
				const cars = await getData();
				if (cars.length > 0 ) {
					setcarData(cars)
					setIsLoading(false)
				}
			}
			catch (error) {
			console.error("Fetching went wrong, check your connection")
			}
		}	

		fetchData();

	},[])

	if(isLoading){
		return (
			<ActivityIndicator size="large" />
		)
	}


  return (
	<View>
	  <Text>{carData.length > 0 && (
		<View>{carData.map( car => car._id)}</View>
	  )}</Text>
	</View>
  )
}

export default Cars