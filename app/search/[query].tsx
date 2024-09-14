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
import Trending from "@/components/Trending";
import CustomSearchBar from "@/components/SearchBar";
import EmptyState from "@/components/EmptyState";
import { getAllPosts, getLatestPosts, searchPosts } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";
import VideoCard from "@/components/VideoCard";
import { Post } from "@/types/types";
import { useLocalSearchParams } from "expo-router";

const SearchBar = async () => {
  const { query } = useLocalSearchParams();

  const { data: posts, refetch } = useAppwrite(searchPosts(query));

  useEffect(() => {
    refetch();
  }, [query]);

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item.creator.username}
            avatar={item.creator.avatar}
          />
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Search Results
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  {query}
                </Text>
                <CustomSearchBar initialQuery={query} />
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No video found"
            subtitle="Be the first to create a video"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default SearchBar;
