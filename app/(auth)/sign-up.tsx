import { Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import Button from "@/components/Button";
import { Link } from "expo-router";
import { createUser } from "@/lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleSubmit = () => {
    createUser();
  };

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
            Sign up to Aora
          </Text>
          <FormField
            title="Username"
            value={form.username}
            placeholder="Username"
            handleChange={(text: string) =>
              setForm({ ...form, username: text })
            }
            otherStyles="mt-6"
          />
          <FormField
            title="Email"
            value={form.email}
            placeholder="Email"
            handleChange={(text: string) => setForm({ ...form, email: text })}
            otherStyles="mt-6"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            placeholder="Password"
            value={form.password}
            handleChange={(text: string) =>
              setForm({ ...form, password: text })
            }
            otherStyles="mt-6"
          />
          <Button
            title="Sign Up"
            handlePress={handleSubmit}
            containerStyles="mt-6"
            isLoading={isSubmiting}
          ></Button>
          <View className="justify-center pt-6 gap-2 flex-row">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
