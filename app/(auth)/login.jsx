import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useSignIn } from '@clerk/clerk-expo'
import Spinner from 'react-native-loading-spinner-overlay'

const Login = () => {
	const { signIn, isLoaded, setActive } = useSignIn()

	const [email, setEmail] = useState('');
	const [password , setPassword ] = useState('')
	const [loading, setLoading] = useState(false);

	const onSignIn = async () => {
		if(!isLoaded) {
			return ;
		}
		setLoading(true);

		try {
			const completeSignIn = await signIn.create({
				identifier : email,
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
		<View className="absolute h-40 w-40 rounded-full left-[-20] top-20 bg-indigo-600 ">
		</View>
		<View className="absolute h-60 w-60 rounded-full right-[-10] top-5 bg-fuchsia-800">
		</View>

		<Spinner visible={false} animation='slide' />
		<TextInput
			clearButtonMode='always'
			autoCapitalize="none"
			placeholder="jundev@mecar.com"
			value={email}
			onChangeText={(e)=> setEmail(e)}
			className="rounded-md h-10 px-2 border border-indigo-200 w-full"
		/>
		<TextInput 
			placeholder='password'
			clearButtonMode='always'
			value={password}
			secureTextEntry
			onChangeText={(text) => setPassword(text)}
			keyboardAppearance='default'
			className="rounded-md h-10 px-2 border border-indigo-200 w-full"
		/>
	</View>
  )
}

export default Login