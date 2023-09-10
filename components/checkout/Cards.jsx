import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { Entypo, FontAwesome, Ionicons  } from '@expo/vector-icons';

import cards from '../../utils/cards'

const Cards = () => {
  return (
    <>
      <ScrollView className="mt-5 w-full h-44 space-x-3 px-5 flex-grow-0" horizontal={true} showsHorizontalScrollIndicator={false}>
        {cards.map(card => (
			<View className="h-full w-72 relative" key={card.title}>
				<Image source={card.image} className="h-full w-full overflow-hidden" resizeMode='contain'/>
				<View className="absolute p-1 bg-indigo-500 right-1 bottom-0 rounded-br-lg rounded-tl-lg" style={{display : card.isSelected ? 'flex' : "none"}}>
					<Ionicons name="checkmark-outline" size={20} color="white" />
				</View>
			</View>
		))}
      </ScrollView>
    </>
  )
}

export default Cards