
import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useSignIn } from '@clerk/clerk-expo'
import { Stack } from 'expo-router'

const PwReset = () => {
	const [emailAdress, setEmailAdress] = useState("")
	const [password, setPassword] = useState('')
	const [code, setCode] = useState('')
	const [successfulCreation, setSuccessfulCreation] = useState(false);
	const { signIn, setActive} = useSignIn();

	//request a password reset code by email
	const onRequestReset = async () => {
		try {
			await signIn.create({
				strategy: "reset_password_email_code",
				identifier: emailAdress
			})
			setSuccessfulCreation(true);
	
		} catch (e) {
			alert(e.errors[0].message)
		}
	}

	//reset the password with the code and the new password 
	const onReset = async () => {
		try {
			const result = await signIn.attemptFirstFactor({
				strategy: 'reset_password_email_code',
				code,
				password
			})

			console.log(result)
			alert('password reset successfully!')

			//set the user session active, which will log in the user automatically
			await setActive({
				session: result.createdSessionId
			})
		} catch (e) {
			alert(e.errors[0].message);
		}
	}

  return (
	<View className="flex-1 justify-center items-center">
		<Stack.Screen options={{headerBackVisible: !successfulCreation}} />

		{!successfulCreation && (
			<View className="space-y-2 w-4/6">
				<TextInput
					autoFocus={true}
					autoCapitalize="none"
					placeholder="jundev@mecar.com"
					value={emailAdress}
					onChangeText={(text)=> setEmailAdress(text)}
					className="rounded-md h-10 px-2 border border-indigo-200 w-full"
				/>
				<Pressable className="rounded-md bg-blue-600 py-3 px-5 w-full items-center" onPress={onRequestReset}>
					<Text className="font-semibold text-white">send Reset Email</Text>
				</Pressable>
			</View>
		)}

		{successfulCreation && (
			
			<View className="space-y-2 w-full px-5">
					<TextInput 
						value={code}
						onChangeText={(code) => setCode(code)}
						placeholder='code...'
						className="rounded-md h-10 px-2 border border-indigo-200 w-full"
					/>
					<TextInput 
						placeholder='password'
						clearButtonMode='always'
						value={password}
						secureTextEntry
						onChangeText={(text) => setPassword(text)}
						className="rounded-md h-10 px-2 border border-indigo-200 w-full"
						/>
					
					<Pressable className="rounded-md bg-blue-600 py-3 px-5 w-2/3 items-center" onPress={onReset}>
						<Text className="font-semibold text-white">Set New Password</Text>
					</Pressable>
			</View>
		)}
	</View>
  )
}

export default PwReset