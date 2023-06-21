import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { hero } from "../assets";
import { Link } from "expo-router";
import "url-search-params-polyfill";

export default function Page() {
  return (
    <SafeAreaView className="flex-1 items-center">
      <View className="w-full h-[65%] bg-purple-400 bg-opacity-10">
        <Image source={hero} className="w-full h-full object-cover" />
      </View>
      <View className="flex-1 items-center rounded-t-[50px] bg-white h-full w-full -mt-10">
        <View className="flex w-full mt-10 items-center px-10">
          <Text className="text-4xl text-indigo-600 font-bold">
            Rent a Vehicle
          </Text>
          <Text className="text-3xl text-indigo-400 font-semibold">
            Easily Only Here!
          </Text>
          <Text className="text-gray-400 mt-5 w-full text-center">
            We are the solution for those of you who are interested in electric
            car accross the globe
          </Text>
        </View>
        <View className="flex items-center justify-center gap-2 w-full mt-5 px-10">
          <TouchableOpacity className="w-full rounded-full p-3 items-center bg-indigo-700">
            <Link href="/home" className="w-full items-center text-center">
              <Text className="text-xl text-white ">Get Started</Text>
            </Link>
          </TouchableOpacity>
          <TouchableOpacity className="w-full rounded-full p-3 items-center">
            <Text className="text-slate-500"> Skip </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
