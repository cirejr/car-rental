import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { hero } from "../assets";
import { Link } from "expo-router";

export default function Page() {
  return (
    <SafeAreaView className="flex-1 items-center">
      <View className="w-full h-4/6">
        <Image source={hero} className="w-full h-full object-cover" />
      </View>
      <View className="flex-1 items-center rounded-t-[50px] bg-white h-full w-full -mt-10">
        <View className="flex w-full mt-10 items-center px-10">
          <Text className="text-4xl text-cyan-600 font-bold">
            Feel Electric Vehicle
          </Text>
          <Text className="text-3xl text-cyan-500 font-semibold">
            Easily Only Here!
          </Text>
          <Text className="text-gray-400 mt-5 w-full text-center">
            We are the solution for those of you who are interested in electric
            car accross the globe
          </Text>
        </View>
        <View className="flex items-center justify-center gap-2 w-full mt-7 px-10">
          <TouchableOpacity className="w-full rounded-full p-3 items-center bg-cyan-900">
            <Link href="/home">
              <Text className="text-xl text-white">Get Started </Text>
            </Link>
          </TouchableOpacity>
          <TouchableOpacity className="w-full rounded-full p-3 items-center">
            <Text className="text-xl text-slate-500"> Skip </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
