import { SafeAreaView, ScrollView, View } from "react-native";
import { Link } from "expo-router";

import Header from "../components/Header";
import Cars from "../components/Cars";
import Search from "../components/Search";
import RandomCars from "../components/RandomCars";
import Brands from "../components/Brands";

export default function home() {
  return (
    <SafeAreaView className="flex-1 pt-10 bg-slate-200">
      <View className=" flex items-center space-y-4 justify-center p-3">
        <Header />
        <Search />
        <Brands />
      </View>
      <ScrollView className="flex-3 rounded-t-[50px] bg-white w-full mt-4 px-4">
        <View className="mt-10">
          <RandomCars />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
