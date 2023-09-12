import { View, Text, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from "@expo/vector-icons";

import { userpfp } from '../assets';
import { Link } from 'expo-router';

const Header = () => {
  return (
	  <View className="flex-row justify-between items-center w-full p-2 mb-2">
        <View className="flex">
          <Text className="text-gray-400 font-light">Location</Text>
          <Text className="text-2xl font-semibold">Dakar, HLM</Text>
        </View>
        <View className="flex-row gap-2 items-center justify-center">
          <View className="rounded-full p-2 items-center border border-gray-400 w-10 h-10">
            <FontAwesome name="bell-o" size={20} color="black" />
          </View>
          <Link
		  	href={"/(auth)/login"} >
			<View className="rounded-full items-center border border-gray-400 w-10 h-10">
				<Image
				source={userpfp}
				className="rounded-full w-10 h-10"
				resizeMode='cover'
				/>
			</View>	
          </Link>
        </View>
      </View>
  )
}

export default Header