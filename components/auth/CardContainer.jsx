import { View } from 'react-native'
import React from 'react'

export default function CardContainer({ children, style }) {
  return (
    <View className="px-5 pt-5 space-y-5 items-center h-2/4 w-10/12 self-center rounded-md shadow-2xl opacity-90 bg-white" style={style}>
        {children}
    </View>
  )
}