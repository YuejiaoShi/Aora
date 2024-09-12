import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import SearchBar from "@/components/SearchBar";
import Trending from "@/components/Trending";
import EmptyState from "@/components/EmptyState";
import { getAllPosts, getLatestPosts } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";
import VideoCard from "@/components/VideoCard";
import { Post } from "@/types/types";

const Home = () => {
  const { data: postsData, refetch } = useAppwrite(getAllPosts);
  const posts = postsData as Post[];

  const { data: latestPosts } = useAppwrite(getLatestPosts);

  const [refreshing, setIsRefreshing] = useState(false);

  const onRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  const dummyVideos = [
    { id: "1", title: "Video 1" },
    { id: "2", title: "Video 2" },
    { id: "3", title: "Video 3" },
  ];
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            video={{
              title: item.title,
              thumbnail: item.thumbnail,
              videoURL: item.video,
              prompt: item.prompt,
              creator: {
                username: item.creator.username,
                avatar: item.creator.avatar,
              },
            }}
          />
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
              <Trending posts={latestPosts ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No video found"
            subtitle="Be the first to create a video"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
