import { View, Text, TextInput, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useSignIn } from '@clerk/clerk-expo'
import Spinner from 'react-native-loading-spinner-overlay'
import { Link } from 'expo-router'
import { styled, useColorScheme } from 'nativewind'
import CustomShapes from '../../components/auth/CustomShapes'
import CustomTextInput from '../../components/auth/CustomTextInput'
import AuthButton from '../../components/auth/AuthButton'
import CardContainer from '../../components/auth/CardContainer'

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
		<CustomShapes />
		<Text className="text-center items-center text-white text-2xl mb-2">Login</Text>
		<Text className="text-white mb-5 ">Please log in to continue</Text>
		<CardContainer>
			<Spinner visible={loading} animation='slide' />
			<CustomTextInput 
				label='Email Adress'
				placeholder='your email'
				secureTextEntry={false}
				value={emailAdress}
				onChangeText={(text) => setEmailAdress(text)}
			/>
			<CustomTextInput 
				label='Password'
				placeholder='password'
				secureTextEntry={true}
				value={password}
				onChangeText={(text) => setPassword(text)}
			/>
				<Link href="/reset" asChild>
					<Pressable className="items-end w-full">
						<Text className="font-normal">Forgot Password ?</Text>
					</Pressable>
				</Link>
				<AuthButton 
					title='Login'
					onPress={onSignIn}
				/>
			<View className="flex-row w-full">
				<Text className="">Don't have an account ? </Text>
				<Link href="/register" asChild>
					<Pressable className="">
						<Text className="font-bold text-blue-600">Sign Up</Text>
					</Pressable>
				</Link>
			</View>
		</CardContainer>
	</View>
  )
}

export default Login