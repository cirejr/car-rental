import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useOAuth, useSignUp } from '@clerk/clerk-expo'
import { Stack } from 'expo-router'
import Spinner from 'react-native-loading-spinner-overlay'
import { TextInput } from 'react-native-gesture-handler'

const Register = () => {
	const { isLoaded, signUp, setActive } = useSignUp()
	const [emailAddress, setEmailAddress] = useState("")
	const [password, setPassword] = useState('')
	const [pendingVerification, setPendingVerification] = useState(false)
	const [code, setCode] = useState('')
	const [loading, setLoading] = useState(false)

	const onSignUp = async () => {
		if(!isLoaded){
			return;
		}
		setLoading(true);

		try {
			await signUp.create({
				emailAddress,
				password
			})

			await signUp.prepareEmailAddressVerification({ strategy : 'email_code' })

			setPendingVerification(true);
		} catch (e) {
			alert(e.errors[0].message)
		}finally{
			setLoading(false)
		}
	}

	const onVerify = async () => {
		if (!isLoaded) {
			return;
		}
		setLoading(true);
		try {
			const completeSignUp = await signUp.attemptEmailAddressVerification({
				code
			})

			await setActive({
				session: completeSignUp.createdSessionId
			})
			
			alert("Email verified & account created succesfully ")
		} catch (e) {
			alert(e.errors[0].message)
		} finally{
			setLoading(false)
		}
	}

  return (
	<View className="flex-1 justify-center items-center px-5 space-y-3">
		<Stack.Screen options={{ headerBackVisible:!pendingVerification}} />
		<Spinner visible={loading} />

		{!pendingVerification && (
			<View className="space-y-2 w-full">		
				<TextInput
					autoCapitalize="none"
					placeholder="jundev@mecar.com"
					value={emailAddress}
					onChangeText={(text)=> setEmailAddress(text)}
					className="rounded-md h-10 px-2 border border-indigo-200 w-full"
				/>
				<TextInput 
					placeholder='password'
					value={password}
					secureTextEntry
					onChangeText={(text) => setPassword(text)}
					className="rounded-md h-10 px-2 border border-indigo-200 w-full"
				/>
				<Pressable className="rounded-md bg-blue-600 py-3 px-5 w-2/3 items-center" onPress={onSignUp}>
					<Text className="font-semibold text-white">Sign Up</Text>
				</Pressable>
			</View>
		)}

		{pendingVerification && (
			<>
				<View>
					<TextInput 
						value={code}
						onChangeText={(code) => setCode(code)}
						placeholder='code...'
						className="rounded-md h-10 px-2 border border-indigo-200 w-full"
					/>
				</View>
				<Pressable className="rounded-md bg-blue-600 py-3 px-5 w-2/3 items-center" onPress={onVerify}>
					<Text className="font-semibold text-white">Verify Email</Text>
				</Pressable>
			</>
		)}
	</View>
  )
}

export default Register