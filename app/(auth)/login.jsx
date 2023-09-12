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
	<View className="flex-1 justify-center items-center">
		<Spinner visible={true} animation='slide' />
		<TextInput
			autoCapitalize="none"
			placeholder="jundev@mecar.com"
			value={email}
			onChangeText={setEmail}
			className="rounded-md h-10 px-2 border border-indigo-200"
		/>
	</View>
  )
}

export default Login