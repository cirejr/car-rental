import { View, Text } from 'react-native'
import React from 'react'

export default function CustomShapes() {
  return (
    <View className="absolute h-2/3 w-full bg-blue-600 dark:bg-blue-950 top-0">
		<View className="absolute h-60 w-[600px] rotate-[30deg] right-[-100] bottom-[-40] bg-sky-300">
		</View>
		<View className="absolute h-60 w-[600px] rotate-[40deg] right-[-50] bottom-[-200] bg-slate-100">
		</View>
	</View>
  )
}