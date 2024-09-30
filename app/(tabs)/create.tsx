import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import { Video, ResizeMode } from "expo-av";
import { icons } from "@/constants";
import Button from "@/components/Button";
import * as DocumentPicker from "expo-document-picker";

interface DocumentPickerAsset {
  uri: string;
  name?: string;
  size?: number;
  type?: string;
}

interface FormState {
  thumbnail: DocumentPickerAsset | null;
  video: DocumentPickerAsset | null;
  title: string;
  prompt: string;
}

const Create = () => {
  const [upLoading, setUpLoading] = useState(false);
  const [form, setForm] = useState<FormState>({
    title: "",
    video: null,
    thumbnail: null,
    prompt: "",
  });

  const openPicker = async (selectedType: string) => {
    const result = await DocumentPicker.getDocumentAsync({
      type:
        selectedType === "image"
          ? ["image/jpeg", "image/jpg", "image/png"]
          : ["video/mp4", "video/gif", "video/mov"],
    });
    if (!result.canceled) {
      if (selectedType === "image") {
        setForm({ ...form, thumbnail: result.assets[0] });
      } else if (selectedType === "video") {
        setForm({ ...form, video: result.assets[0] });
      } else {
        setTimeout(() => {
          Alert.alert("Document Picked!", JSON.stringify(result, null, 2));
        }, 1000);
      }
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <Text className="text-2xl text-white font-psemibold">Upload Video</Text>

        <FormField
          title="Video Title"
          placeholder="Enter your video title"
          value={form.title}
          handleChange={(e) => setForm({ ...form, title: e })}
          otherStyles="mt-8"
        />

        <View className="mt-6 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">
            Upload Video
          </Text>
          <TouchableOpacity onPress={() => openPicker("video")}>
            {form.video ? (
              <Video
                source={{ uri: form.video.uri }}
                resizeMode={ResizeMode.COVER}
                useNativeControls
                isLooping
                className="w-full h-40 px-4 rounded-2xl"
              />
            ) : (
              <View className="w-full h-40 px-4 bg-black-100 rounded-2xl justify-center items-center">
                <View className="w-14 h-14 border border-dashed border-secondary-100 justify-center items-center">
                  <Image
                    source={icons.upload}
                    className="w-1/2 h-1/2"
                    resizeMode="contain"
                  />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View className="mt-6 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">
            Upload Thumbnail
          </Text>
          <TouchableOpacity onPress={() => openPicker("image")}>
            {form.thumbnail ? (
              <Image
                source={{ uri: form.thumbnail.uri }}
                className="w-full h-64 rounded-2xl"
                resizeMode="cover"
              />
            ) : (
              <View className="w-full h-16 px-4 flex-row space-x-2 bg-black-100 border border-dashed border-black-200 rounded-2xl justify-center items-center">
                <Image
                  source={icons.upload}
                  className="w-5 h-5"
                  resizeMode="contain"
                />
                <Text className="text-sm text-gray-100">Choose a file</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <FormField
          title="AI Prompt"
          placeholder="AI prompt you used to generate this video"
          value={form.prompt}
          handleChange={(e) => setForm({ ...form, prompt: e })}
          otherStyles="mt-7"
        />
        <Button
          title="Submit & Publish"
          handlePress={() => {
            if (!form.title || !form.video || !form.thumbnail || !form.prompt) {
              Alert.alert("Please fill all fields");
              return;
            }
            setUpLoading(true);
          }}
          containerStyles="mt-7"
          isLoading={upLoading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({});
