import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

export default function Profile() {
	const { user } = useUser()
	const [firstName, setFirstName] = useState(user?.firstName)
	const [lastName, setLastName] = useState(user?.lastName)

	const onSaveUser = async () => {
		try {
			await user?.update({
				firstName: !firstName,
				lastName: !lastName
			})
		} catch (error) {
			console.log(error)
		}
	}

	return(
		<SafeAreaView className="flex-1 items-center justify-center px-5">
			<View className="w-full">
				<Text className="font-semibold">Good morning {user?.firstName} {user?.lastName}</Text>
			</View>
			<View className="flex space-y-2 mt-5 w-full ">
				<Text>Change username ? </Text>
				<TextInput 
					className="border border-indigo-200 px-3 py-1 rounded-md"
					placeholder="First Name"
					value={firstName || ''}
					onTextChange={(text) => setFirstName(text)}
				/>
				<TextInput 
					className="border border-indigo-200 px-3 py-1 rounded-md"
					placeholder="First Name"
					value={lastName || ''}
					onTextChange={(text) => setLastName(text)}
				/>
				<Pressable className="w-1/2" onPress={onSaveUser}>
					<Text>Update Account</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	)
}