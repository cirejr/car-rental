import { View, Text, SafeAreaView, Pressable, ScrollView, Image} from 'react-native'
import React, { useState } from 'react'
import { Entypo, FontAwesome, Ionicons  } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';

import cards from '../../utils/cards'
import paymentOptions from '../../utils/paymentOptions'
import { FlashList } from '@shopify/flash-list';
import { color } from 'react-native-reanimated';



const Page = () => {
	const [isActive, setIsActive] = useState(false)
  const router = useRouter()

	const onFocus = () => {
		setIsActive(true)
	}

  return (
    <SafeAreaView className="flex-1">
      <View className="h-36 flex-row items-center justify-between px-5 bg-indigo-500 rounded-b-3xl">
        <Pressable onPress={() => router.back()}>
          <Entypo name="chevron-left" size={24} color="black" />
        </Pressable>
        <Link href={'/cart'}>
          <FontAwesome name="shopping-basket" size={24} color="black" />
        </Link>
      </View>
      <Text className="px-5 mt-5 mb-3 font-semibold text-xl">Payment Options</Text>
      <ScrollView className="w-full h-10 space-x-3 px-5 flex-grow-0" horizontal={true} showsHorizontalScrollIndicator={false}>
        {paymentOptions.map(item => (
			<View 
				key={item.title} 
				className="flex-row space-x-2 rounded-md px-3 py-2 border box-content text-center"
				style={{ backgroundColor : item.isActive ? '#6366f1' : 'none', borderColor: item.isActive ? 'none' : '#e0e7ff'}}
				onPress={ () => onFocus}
			>
				<FontAwesome name={item.icon} color={item.color} size={20} />
				<Text className="" style={{ color: item.isActive ? 'white' : 'black'}} key={item.title}>{item.title}</Text>
			</View>
		))}
      </ScrollView>
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
    </SafeAreaView>
  )
}

export default Page