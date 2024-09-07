import { Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomFormField from "@/components/CustomFormField";
import CustomButton from "@/components/CustomButton";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const handleSubmit = () => {};

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full h-full justify-center px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log in to Aora
          </Text>
          <CustomFormField
            title="Email"
            value={form.email}
            placeholder="Email"
            handleChange={(text: string) => setForm({ ...form, email: text })}
            otherStyles="mt-6"
            keyboardType="email-address"
          />
          <CustomFormField
            title="Password"
            placeholder="Password"
            value={form.password}
            handleChange={(text: string) =>
              setForm({ ...form, password: text })
            }
            otherStyles="mt-6"
          />
          <CustomButton
            title="Sign In"
            handlePress={handleSubmit}
            containerStyles="mt-6"
          ></CustomButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
