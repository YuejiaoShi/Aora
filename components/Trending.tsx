import React from "react";
import * as Animatable from "react-native-animatable";
import { FlatList, Text } from "react-native";

interface TrendingProps {
  posts: any;
}

const TrendingItem: React.FC<any> = ({ activeItem, item }) => {
  return (
    <Animatable.View
      animation="fadeIn"
      duration={500}
      className="mr-5 text-white"
    ></Animatable.View>
  );
};

const Trending: React.FC<TrendingProps> = ({ posts }) => {
  const [activeItem, setActiveItem] = React.useState(posts[0]);

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
