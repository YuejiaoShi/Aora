import {  Text, View } from "react-native";
import React from "react";

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
  return (
    <View>
      <Text>VideoCard</Text>
    </View>
  );
};

export default VideoCard;
