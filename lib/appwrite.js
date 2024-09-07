import { Client, ID, Account, Avatars, Databases } from "react-native-appwrite";

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

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register User
export const createUser = async (username, email, password) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      username,
      email,
      password
    );

    if (!newAccount) throw Error;
    const avatarURL = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique,
      { accountId: newAccount.$id, email, username, avatar: avatarURL }
    );

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailSession(email, password);
    return session;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
