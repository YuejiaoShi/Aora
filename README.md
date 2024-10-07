# Video Upload Platform

## Overview

This is a video uploading platform designed for users to upload, manage, and share their AI-generated videos with others. The platform is built using React Native for mobile applications with support for media upload, user authentication, and post management.

---

## Technologies and Libraries Used

- **React Native**: Core framework for building cross-platform mobile applications.
- **Expo**: A toolchain for streamlined React Native development.
- **Appwrite**: Backend services for authentication, database, and file storage.
- **Context API**: Manages global state for user data and authentication.
- **TypeScript**: Ensures type safety and improves developer experience.

---

## Features

1. **Video Uploading**:

   - Upload videos and thumbnails from the device gallery.
   - Attach relevant metadata, such as title and AI prompt.
   - Submit the video for publication, allowing others to view it.

2. **Profile Management**:

   - View user profiles with the ability to display and manage uploaded videos.
   - Users can log out or delete videos directly from their profile.

3. **Authentication**:

   - User sign-up and login using email/password with Appwrite backend.
   - Protected routes ensure only authenticated users can upload or manage videos.

4. **Video Viewing**:
   - Users can view uploaded videos, with details like title, creator info, and more.

---

## App Structure

### 1. **Create Video Screen** (`Create.tsx`)

- **Functionality**: Allows users to upload a video with a corresponding thumbnail, title, and prompt.
- **Components Used**:

  - `FormField`: Handles input for title and prompt.
  - `ImagePicker`: Used for picking both images (thumbnails) and videos.
  - `Button`: A reusable button component for submitting the form.

- **Features**:
  - **Video Upload**: Allows the user to upload a video from the device.
  - **Thumbnail Selection**: Users can pick an image to serve as the video’s thumbnail.
  - **AI Prompt**: Enables users to include a description or prompt they used to generate the content.
  - **Validation**: Checks if all fields are filled before submission.
  - **Submission**: Handles the video upload and navigates back to the home page upon success.

---

### 2. **Profile Screen** (`Profile.tsx`)

- **Functionality**: Displays user's uploaded videos and profile information, with a log-out option.
- **Components Used**:

  - `FlatList`: Used for rendering the list of uploaded videos.
  - `InfoBox`: Displays user's profile information, such as the number of posts and followers.

- **Features**:
  - **User Information**: Displays the user's avatar, username, and a count of their posts and followers.
  - **Log Out**: Allows users to securely log out of their account.
  - **Video List**: Shows a list of the user's uploaded videos, including video thumbnails and titles.

---

### 3. **Sign In Screen** (`SignIn.tsx`)

- **Functionality**: Allows users to log into the app using their email and password.
- **Components Used**:

  - `FormField`: For handling email and password input.
  - `Button`: A reusable button component for submitting the form.

- **Features**:
  - **User Authentication**: Authenticates the user using Appwrite’s backend.
  - **Form Validation**: Ensures both email and password fields are filled before submission.
  - **Navigation**: Redirects authenticated users to the home screen.

---

### 4. **Home Screen** (`Home.tsx`)

- **Functionality**: Displays a feed of all the uploaded videos from various users.
- **Components Used**:

  - `FlatList`: Renders a list of video posts.
  - `VideoCard`: A custom component to display video information like title, thumbnail, and creator details.

- **Features**:
  - **Video Feed**: Shows a list of videos uploaded by different users.
  - **Navigation to Details**: Clicking on a video navigates to a detailed view of the selected video.
  - **Search**: Enables users to search for videos by title or creator.

---

### 5. **Video Details Screen** (`VideoDetails.tsx`)

- **Functionality**: Provides a detailed view of a selected video, showing the full video, title, description, and comments.
- **Components Used**:

  - `VideoPlayer`: Handles video playback.
  - `CommentBox`: Allows users to view and add comments on the video.

- **Features**:
  - **Video Playback**: Users can play and pause the video.
  - **Comments Section**: Enables users to read and add comments to the video.
  - **Creator Info**: Shows details about the video creator, including their username and avatar.
