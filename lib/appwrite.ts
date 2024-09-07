import { Client } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.yuejiao.aora",
  projectId: "66dcceff0031dfdf6527",
  databaseId: "66dcd0010027a099ba13",
  userCollectionId: "66dcd06d002de94db30e",
  videoCollectionId: "66dcd085001df29217df",
  storageId: "66dcd1d30012490d2657",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);
