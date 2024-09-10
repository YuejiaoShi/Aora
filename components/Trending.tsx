import React from "react";
import { FlatList, Text } from "react-native";

interface TrendingProps {
  posts: any;
}

const Trending: React.FC<TrendingProps> = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text className="text-white">{item.title}</Text>
      )}
    />
  );
};

export default Trending;
