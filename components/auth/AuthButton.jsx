import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function AuthButton({title, onPress}) {
  return (
    <Pressable className="mt-3 rounded-md bg-blue-600 py-3 px-5 w-full items-center" onPress={onPress}>
        <Text className="font-semibold text-white">{title}</Text>
    </Pressable>
  )
}