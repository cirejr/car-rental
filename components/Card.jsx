import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome,FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const Card = ({iconName, title, specs}) => {
  return (
	<View className="w-[32%] h-30 p-2 rounded-lg bg-indigo-200 bg-opacity-10 gap-1 mt-2">
		<View className="rounded-full bg-white p-2 w-10 h-10 flex items-center justify-center mb-2">
			<MaterialCommunityIcons name={iconName} size={15}  />
		</View>
	  <Text className="text-slate-500">{title}</Text>
	  <Text className="font-semibold text-base">{specs}</Text>
	</View>
  )
}

export default Card