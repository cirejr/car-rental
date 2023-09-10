import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome,  } from '@expo/vector-icons';


import paymentOptions from '../../utils/paymentOptions'

const PaymentOptions = () => {
    
	const [isActive, setIsActive] = useState(false)
  
      const onFocus = () => {
          setIsActive(true)
      }
  return (
    <>
      <Text className="px-5 mt-5 mb-3 font-semibold text-xl">Payment Options</Text>
      <ScrollView className="w-full h-10 space-x-3 px-5 flex-grow-0" horizontal={true} showsHorizontalScrollIndicator={false}>
        {paymentOptions.map(item => (
			<View 
				key={item.title} 
				className="flex-row self-start space-x-2 rounded-md px-3 py-2 border box-content text-center"
				style={{ backgroundColor : item.isActive ? '#6366f1' : 'none', borderColor: item.isActive ? '#6366f1' : '#e0e7ff'}}
				onPress={ () => onFocus}
			>
				<FontAwesome name={item.icon} color={item.color} size={20} />
				<Text className="font-semibold" style={{ color: item.isActive ? 'white' : 'black'}} key={item.title}>{item.title}</Text>
			</View>
		))}
      </ScrollView>
    </>
  )
}

export default PaymentOptions