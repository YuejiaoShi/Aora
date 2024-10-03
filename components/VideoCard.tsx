import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import WebView from "react-native-webview";
import { icons } from "../constants";

interface VideoCardProps {
  title: string;
  creator: string;
  avatar: string;
  thumbnail: string;
  video: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  creator,
  avatar,
  thumbnail,
  video,
}) => {
  const [play, setPlay] = useState(false);
  const [videoRef, setVideoRef] = useState<any>(null);

  const isEmbedded =
    video.includes("youtube.com") || video.includes("vimeo.com");

  return (
    <View className="flex flex-col items-center px-4 mb-14">
      <View className="flex flex-row gap-3 items-start">
        <View className="flex flex-row items-center flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>
          <View className="flex flex-1 ml-3">
            <Text
              className="font-semibold text-sm text-white"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text className="text-xs text-gray-100" numberOfLines={1}>
              {creator}
            </Text>
          </View>
        </View>
      </View>

      {play ? (
        isEmbedded ? (
          <View className="w-full h-60 rounded-xl mt-3 relative">
            <WebView
              source={{ uri: video }}
              className="w-full h-full"
              allowsInlineMediaPlayback
              javaScriptEnabled
              allowsFullscreenVideo
            />
          </View>
        ) : (
          <View className="w-full h-60 rounded-xl mt-3 relative">
            <Video
              source={{ uri: video }}
              className="w-full h-full"
              useNativeControls
              resizeMode={ResizeMode.COVER}
              shouldPlay
              onPlaybackStatusUpdate={(status: AVPlaybackStatus) => {
                if (status.isLoaded) {
                  if (status.didJustFinish) {
                    setPlay(false);
                    videoRef?.setPositionAsync(0); // reset video position to the start
                  } else if (!status.isPlaying) {
                  }
                } else {
                  if (status.error) {
                    console.error("Playback status error:", status.error);
                    setPlay(false);
                  }
                }
              }}
              onError={(error) => {
                console.error("Failed to load video:", error);
                Alert.alert("Error", "Failed to load video.");
                setPlay(false);
              }}
            />
          </View>
        )
      ) : (
        <TouchableOpacity
          className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
