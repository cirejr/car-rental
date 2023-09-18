import { View, Text, TextInput, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useSignIn } from '@clerk/clerk-expo'
import Spinner from 'react-native-loading-spinner-overlay'
import { Link } from 'expo-router'

const Login = () => {
	const { signIn, isLoaded, setActive } = useSignIn()

	const [emailAdress, setEmailAdress] = useState('');
	const [password , setPassword ] = useState('')
	const [loading, setLoading] = useState(false);

	const onSignIn = async () => {
		if(!isLoaded) {
			return ;
		}
		setLoading(true);

		try {
			const completeSignIn = await signIn.create({
				identifier : emailAdress,
				password
			});
			await setActive({session : completeSignIn.createdSessionId})
			
		} catch (error) {
			alert(error.errors[0]?.message);
		} finally {
			return setLoading(false)
		}
	}
	
  return (
	<View className="flex-1 justify-center items-center px-5 space-y-3">
		<View className="absolute h-40 w-40 rounded-full left-[-20] top-20 bg-blue-600 ">
		</View>
		<View className="absolute h-60 w-60 rounded-full right-[-10] top-5 bg-emerald-700">
		</View>

		<Spinner visible={loading} animation='slide' />
		<TextInput
			autoCapitalize="none"
			placeholder="jundev@mecar.com"
			value={emailAdress}
			onChangeText={(text)=> setEmailAdress(text)}
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
			<Pressable className="rounded-md bg-blue-600 py-3 px-5 w-2/3 items-center" onPress={onSignIn}>
				<Text className="font-semibold text-white">Login</Text>
			</Pressable>
		<View className="flex w-2/3">
			<Link href="/reset" asChild>
				<Pressable className="">
					<Text className="font-normal text-sm">Forgot Password ?</Text>
				</Pressable>
			</Link>
			<Link href="/register" asChild>
				<Pressable className="">
					<Text className="font-normal">Create Account</Text>
				</Pressable>
			</Link>
		</View>
	</View>
  )
}

export default Login