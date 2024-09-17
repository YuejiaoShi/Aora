import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomSearchBar from "@/components/SearchBar";
import EmptyState from "@/components/EmptyState";
import { getUserPosts, searchPosts } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";
import VideoCard from "@/components/VideoCard";
import { Post } from "@/types/types";
import { useLocalSearchParams } from "expo-router";
import { useGlobalContext } from "@/context/GlobalProvider";
import { icons } from "@/constants";

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();

  const { data: posts } = useAppwrite<Post[]>(() => getUserPosts(user.$id));

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
          <View className="mt-6 w-full px-4 justify-center items-center">
            <TouchableOpacity>
              <Image
                source={icons.logout}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No video found"
            subtitle="No video found for this search input"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
