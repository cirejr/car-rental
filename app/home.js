import { SafeAreaView, ScrollView, View } from "react-native";
import { Link } from "expo-router";

import Header from "../components/Header";
import Search from "../components/Search";
import RandomCars from "../components/RandomCars";
import Brands from "../components/Brands";
import Nearby from "../components/Nearby";

export default function home() {
  return (
    <ScrollView className="flex-1 pt-10 bg-slate-200">
      <View className=" flex items-center space-y-4 justify-center p-3">
        <Header />
        <Search />
        <Brands />
      </View>
      <View className="flex-3 rounded-t-[50px] bg-slate-100 w-full mt-4 px-4 overflow-hidden">
        <View className="mt-10">
          <RandomCars />
          <Nearby />
        </View>
      </View>
    </ScrollView>
  );
}
