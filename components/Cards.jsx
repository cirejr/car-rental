import { View, Text } from 'react-native'
import React from 'react'
import { FlashList } from '@shopify/flash-list'

    const paiementOptions = [
        {
            title : 'Save Cards'
        },
        {
            title : 'Gpay'
        },
        {
            title : 'ApplePay'
        },
        {
            title : 'Credit Card' 
        },
    ]

const Cards = () => {
  return (
    <FlashList
        data={paiementOptions}
        horizontal={true}
        estimatedItemSize={200}
        alwaysBounceHorizontal={true}
        renderItem={({item}) => (
            <View className="px-3 py-2 border border-indigo-300 w-full rounded-md items-center">
                <Text className="w-full text-center mr-2"> {item.title }</Text>
            </View>
        )}
    />
  )
}

export default Cards