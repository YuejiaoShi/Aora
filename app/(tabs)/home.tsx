import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import SearchBar from "@/components/SearchBar";
import Trending from "@/components/Trending";
import EmptyState from "@/components/EmptyState";

const Home = () => {
  const dummyData: ArrayLike<any> | null | undefined = [];
  const dummyVideos: never[] = [];
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text className="text-white">{item.title}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome to Aora
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  Yuejiao
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  resizeMode="contain"
                  className="w-10 h-10"
                />
              </View>
            </View>

            <SearchBar placeholder="Search for a video topic..." />

            <View>
              <Text className="text-gray-100 text-lg font-pregular">
                Latest Videos
              </Text>
              <Trending posts={dummyVideos} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No video found"
            subtitle="Try searching for something else"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
