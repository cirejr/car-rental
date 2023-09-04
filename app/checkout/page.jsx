import { View, Text, SafeAreaView, Pressable, ScrollView} from 'react-native'
import React from 'react'
import { Entypo, FontAwesome  } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import Cards from '../../components/Cards';
import { FlashList } from '@shopify/flash-list';


const paiementOptions = [
  {
      title : 'Save Cards'
  },
  {
      title : 'Gpay'
  },
  {
      title : 'ApplePay'
  },
  {
      title : 'Credit Card' 
  },
  {
      title : 'Debit Card' 
  },
]

const Page = () => {
  const router = useRouter()
  return (
    <SafeAreaView className="flex-1">
      <View className="h-36 flex-row items-center justify-between px-5 bg-indigo-500">
        <Pressable onPress={() => router.back()}>
          <Entypo name="chevron-left" size={24} color="black" />
        </Pressable>
        <Link href={'/cart'}>
          <FontAwesome name="shopping-basket" size={24} color="black" />
        </Link>
      </View>
      <Text>Payment Options</Text>
      <ScrollView className="w-full h-10 space-x-3 px-5 flex-grow-0" horizontal={true} showsHorizontalScrollIndicator={false}>
        {paiementOptions.map(item => <Text className="rounded-md px-3 py-2 border border-indigo-300 box-content text-center focus:bg-indigo-700 focus:text-white" key={item.title}>{item.title}</Text>)}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Page