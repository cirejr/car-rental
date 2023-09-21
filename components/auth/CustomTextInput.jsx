import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function CustomTextInput({onChangeText, value, placeholder, secureTextEntry, label}) {
  return (
    <View className="space-y-2 w-full mt-3">
        <Text>{label}</Text>
        <TextInput 
            autoCapitalize='none'
            placeholder={placeholder}
            value={value}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            className="rounded-md h-12 px-2 focus:border-2 border-blue-600 bg-blue-100 w-full"
        />
    </View>    
  )
}