import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { Post } from "@/types/types";

interface TrendingProps {
  posts: Post[];
}

const zoomIn = { 0: { scale: 0.9 }, 1: { scale: 1 } };

const zoomOut = { 0: { scale: 1 }, 1: { scale: 0.9 } };

const TrendingItem: React.FC<any> = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false);
  return (
    <Animatable.View
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
      className="mr-5 text-white"
    >
      {play ? (
        <Text className="text-white">playing</Text>
      ) : (
        <TouchableOpacity
          onPress={() => setPlay(true)}
          className="relative justify-center items-center"
          activeOpacity={0.7}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="w-40 h-40 rounded-2xl"
            resizeMode="cover"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending: React.FC<TrendingProps> = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[0]);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      horizontal
    />
  );
};

export default Trending;
