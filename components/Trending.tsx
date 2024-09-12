import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import { FlatList, Text, TouchableOpacity } from "react-native";

interface TrendingProps {
  posts: any;
}

const zoomIn = { 0: { scale: 0.9 }, 1: { scale: 1 } };

const zoomOut = { 0: { scale: 1 }, 1: { scale: 0.9 } };

const TrendingItem: React.FC<any> = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false);
  return (
    <Animatable.View
      animation={activeItem === item.$id ? "zoomIn" : "zoomOut"}
      duration={500}
      className="mr-5 text-white"
    >
      {play ? (
        <Text className="text-2xl font-pmedium text-white">playing</Text>
      ) : (
        <TouchableOpacity onPress={() => setPlay(true)}></TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending: React.FC<TrendingProps> = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[0]);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      horizontal
    />
  );
};

export default Trending;
