import { View, Text, Image } from 'react-native'
import React from 'react'
import { useContext } from 'react'
import { CarsContext } from '../contexts/CarContextProvider'
import { FontAwesome,FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';



const RandomCars = () => {
	const { randomCars, height, width } = useContext(CarsContext)
	const cardWidth = ( 45 * (width / 100 ));
	console.log("car width : ", cardWidth)
	console.log("width : ", width)
	//console.log("randomCar is : ", randomCars)
  return (
	<View className={`flex items-center w-[${width}]`}>
		<View className="flex-row items-center justify-between w-full">
			<Text className="text-2xl font-semibold">Best Cars</Text>
			<Text className="text-xl font-semibold text-gray-400">View All</Text>
		</View>
		<View className="flex-row items-center justify-between px-3 mt-2" style={{ width : width }}>
			{randomCars.map( car => (
				<Link href={`/Cars/${car.id}`} key={car.id}>
					<View className="flex mt-2 shadow-xl rounded-lg h-48 bg-gray-200" style={{width : cardWidth}}>
						<Image source={{uri : car.image }} className="w-full h-1/2 object-cover rounded-t-lg"/>
						<View className="flex w-full h-1/2 p-2">
							<Text className="text-base font-semibold">{ car.name.length > 15 ? `${car.name.substring(0, 10)}...` : car.name}</Text>
							<Text className="text-gray-400"><FontAwesome name='map-marker' size={15} /> Dakar, Grand Yoff</Text>
							<View className="flex-row items-center gap-2 justify-between mt-2">
								<View className="space-x-1 flex-row items-center">
									<MaterialCommunityIcons name='seat' color="black" size={15}/>
									<Text>4 seats</Text>
								</View>
								<View className="space-x-1 flex-row items-center">
									<FontAwesome5 name="comments-dollar" size={15} color="black" />
									<Text>$30/hour</Text>
								</View>
							</View>
						</View>
					</View>
				</Link>
			))}
		</View>
	</View>
  )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }
})

export default RandomCars