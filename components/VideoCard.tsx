import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

interface VideoCardProps {
  video: {
    title: string;
    thumbnail: string;
    videoURL: string;
    prompt: string;
    creator: {
      username: string;
      avatar: string;
    };
  };
}

const VideoCard: React.FC<VideoCardProps> = ({
  video: {
    title,
    thumbnail,
    videoURL,
    prompt,
    creator: { username, avatar },
  },
}) => {
  const [playing, setPlaying] = useState(false);

  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View
            className="w-12 h-12 round-lg border border-secondary
          justify-center items-center p-0.5 rounded-lg"
          >
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>
          <View className="ml-3 gap-y-1 flex-1 justify-center">
            <Text className="text-sm font-psemibold text-white gap-y-1 number-of-lines-1">
              {title}
            </Text>
            <Text className="text-xs font-pregular text-gray-100 gap-y-1 number-of-lines-1">
              {username}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>
      {playing ? (
        <Text>Playing</Text>
      ) : (
        <TouchableOpacity className="w-full h-60 rounded-xl mt-3 relative justify-center items-center">
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-14 h-14 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
