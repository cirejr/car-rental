import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useOAuth, useSignUp } from '@clerk/clerk-expo'
import { Stack } from 'expo-router'
import Spinner from 'react-native-loading-spinner-overlay'
import { TextInput } from 'react-native-gesture-handler'
import CustomTextInput from '../../components/auth/CustomTextInput'
import CustomShapes from '../../components/auth/CustomShapes'
import CardContainer from '../../components/auth/CardContainer'
import AuthButton from '../../components/auth/AuthButton'

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
	<View className="flex-1 items-center justify-center bg-slate-100">
		<Stack.Screen options={{ header:true , headerBackVisible: !pendingVerification}} />
		<Spinner visible={loading} />
		<CustomShapes />

		{!pendingVerification && (
			<>
			<Text className="text-center items-center text-white text-2xl mb-2">Sign Up</Text>
			<Text className="text-white mb-5 ">Please Create your account to continue</Text>
			<CardContainer style={{ paddingTop : 20, height: '40%', gap: 5 }}>
				<CustomTextInput 
					label='Email Adress'
					placeholder="your email"
					secureTextEntry={false}
					value={emailAddress}
					onChangeText={(text)=> setEmailAddress(text)}
				/>
				<CustomTextInput 
					label='Password'
					placeholder='password'
					secureTextEntry={true}
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>
				<AuthButton 
					title='Create Account'
					onPress={onSignUp}
				/>
			</CardContainer>
			</>
		)}

		{pendingVerification && (
			<>
			<Text className="text-center items-center text-white text-2xl mb-2">Email Verification</Text>
			<Text className="text-white mb-5 ">Put in the code sent to your email</Text>
			<CardContainer style={{ paddingTop : 20, height: '30%', gap: 5 }}>
				<CustomTextInput 
					label='Code'
					placeholder='code ...'
					secureTextEntry={false}
					value={code}
					onChangeText={(code) => setCode(code)}
				/>
				<AuthButton 
					title='Verify Email'
					onPress={onVerify}
				/>
			</CardContainer>
			</>
		)}
	</View>
  )
}

export default Register