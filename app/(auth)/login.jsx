import { View, Text, TextInput, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useSignIn } from '@clerk/clerk-expo'
import Spinner from 'react-native-loading-spinner-overlay'
import { Link } from 'expo-router'
import { styled, useColorScheme } from 'nativewind'

const Login = () => {
	const { signIn, isLoaded, setActive } = useSignIn()
	const { toggleColorScheme, colorScheme} = useColorScheme()
	const [emailAdress, setEmailAdress] = useState('');
	const [password , setPassword ] = useState('')
	const [loading, setLoading] = useState(false);

	const StyledText = styled(Text)
	const StyledPressable = styled(Pressable)

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
	<View className="flex-1 items-center justify-center bg-slate-100">
		<View className="absolute h-2/3 w-full bg-blue-600 dark:bg-blue-950 top-0">
			<View className="absolute h-60 w-[600px] rotate-[30deg] right-[-100] bottom-[-40] bg-sky-300">
			</View>
			<View className="absolute h-60 w-[600px] rotate-[40deg] right-[-50] bottom-[-200] bg-slate-100">
			</View>
		</View>
		<Text className="text-center items-center text-white text-2xl mb-2">Login</Text>
		<Text className="text-white mb-5 ">Please log in to continue</Text>
		<View className="px-5 pt-5 space-y-5 items-center h-2/4 w-10/12 self-center rounded-md shadow-2xl opacity-90 bg-white">
			<Spinner visible={loading} animation='slide' />
			<View className="space-y-2 w-full">
				<Text>Email Adress</Text>
				<TextInput
					autoCapitalize="none"
					placeholder="email@adress.com"
					value={emailAdress}
					onChangeText={(text)=> setEmailAdress(text)}
					className="rounded-md h-12 px-2 w-full bg-blue-100 focus:border-2 border-blue-600"
				/>
			</View>
			<View className="space-y-2 w-full">
				<Text>Password</Text>
				<TextInput 
					placeholder='password'
					clearButtonMode='always'
					value={password}
					secureTextEntry
					onChangeText={(text) => setPassword(text)}
					className="rounded-md h-12 px-2 focus:border-2 border-blue-600 bg-blue-100 w-full "
				/>
			</View>	
			
				<Link href="/reset" asChild>
					<Pressable className="items-end w-full">
						<Text className="font-normal">Forgot Password ?</Text>
					</Pressable>
				</Link>
				<Pressable className="rounded-md bg-blue-600 py-3 px-5 w-full items-center" onPress={onSignIn}>
					<Text className="font-semibold text-white">Login</Text>
				</Pressable>
			<View className="flex-row w-full">
				<Text className="">Don't have an account ? </Text>
				<Link href="/register" asChild>
					<Pressable className="">
						<Text className="font-bold text-blue-600">Sign Up</Text>
					</Pressable>
				</Link>
			</View> 
		</View>
	</View>
  )
}

export default Login