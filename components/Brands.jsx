import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const Brands = (url) => {
  return (
	<View>
		<Image source={url} className="w-10 h-10 rounded-full items-center" />
	</View>
  )
}

export default Brands