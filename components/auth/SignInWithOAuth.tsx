import { View, Text } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';
import AuthButton from './AuthButton';

WebBrowser.maybeCompleteAuthSession();

export default function SignInWithOAuth() {

	useWarmUpBrowser(); 

	const { startOAuthFlow } = useOAuth({strategy: 'oauth_google'})

	const onSignInWithGoogle = async () => {
		try {
			const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow()

			if (createdSessionId) {
				setActive({session: createdSessionId})
			}
		} catch (error) {
			alert(error.errors[0].message)
		}
	}

  return (
	<AuthButton
		onPress={onSignInWithGoogle}
		title={SignInWithOAuth}
	/>
  )
}