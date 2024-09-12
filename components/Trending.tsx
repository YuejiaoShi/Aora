import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import {
  FlatList,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Post } from "@/types/types";
import { icons } from "@/constants";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";

interface TrendingProps {
  posts: Post[];
}

const zoomIn = {
  0: { transform: [{ scale: 0.9 }] },
  1: { transform: [{ scale: 1 }] },
};

const zoomOut = {
  0: { transform: [{ scale: 1 }] },
  1: { transform: [{ scale: 0.9 }] },
};

const TrendingItem: React.FC<any> = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false);
  return (
    <Animatable.View
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
      className="mr-5 text-white"
    >
      {play ? (
        <Video
          source={{ uri: item.video }}
          className="w-52 h-72 rounded-[33px] mt-3 bg-white/10"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status: AVPlaybackStatus) => {
            console.log(status);
            if (!status.isLoaded) {
              console.error("Playback status error:", status.error);
            } else if (!status.isPlaying) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          onPress={() => setPlay(true)}
          className="relative flex justify-center items-center"
          activeOpacity={0.7}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="w-52 h-72 rounded-[33px] my-5 overflow-hidden shadow-lg shadow-black/40"
            resizeMode="cover"
          />

          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending: React.FC<TrendingProps> = ({ posts }) => {
  const [activeItem, setActiveItem] = useState<string | Post>(posts[0]);

  const viewableItemsChanges = ({
    viewableItems,
  }: {
    viewableItems: Array<{ key: string }>;
  }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewableItemsChanges}
      viewabilityConfig={{ itemVisiblePercentThreshold: 70 }}
      contentOffset={{ x: 170, y: 0 }}
      horizontal
    />
  );
};

export default Trending;
