
# FunPlacesApp

**FunPlacesApp** is a cross-platform mobile and web application designed to help users discover fun places, log their experiences, and find activities that fit their budget. The app allows users to share their adventures, along with details like costs, photos, and activity recommendations for specific locations.

## Project Overview

As someone new to Birmingham, I often wanted to find fun places to explore but didn’t know where to start or what activities were available within my budget. I realized that others likely face similar challenges when moving to a new city or visiting a new place. That’s when I came up with the idea for FunPlacesApp.

With this app, users can save location details, share photos, and log their experiences—making it easy to remember the fun things they did and share those experiences with others. Users can list affordable options for food, shelter, and entertainment, helping others who look up the location see which activities others enjoyed.

## Features

- **Discover Activities**: Browse a wide range of activities with descriptions, photos, and costs.
- **Activity Details**: View detailed information about each activity, including reviews from other users.
- **Log Experiences**: Record personal experiences, costs, and tips about each location.
- **User Profiles**: Track logged activities, view past experiences, and plan future adventures.
- **Budget-Friendly Filters**: Filter activities based on budget to find affordable options for food, shelter, and entertainment.

## Table of Contents
- [Installation and Setup](#installation-and-setup)
- [Running the App](#running-the-app)
- [File Structure](#file-structure)
- [Dependencies](#dependencies)
- [Technologies Used](#technologies-used)
- [Future Enhancements](#future-enhancements)

## Installation and Setup

### Prerequisites

- Install [Node.js](https://nodejs.org/) (version 14 or 16 is recommended).
- Install Expo CLI globally:
  ```bash
  npm install -g expo-cli
  ```

### Step-by-Step Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/FunPlacesApp.git
   cd FunPlacesApp
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   npx expo install react-native-web react-dom @expo/metro-runtime
   ```

### Running the App

- **Web**:
  ```bash
  npx expo start --web
  ```
  Open your browser to view the app at `http://localhost:19006`.

- **Mobile (Optional)**:
  - Use the Expo Go app (available on iOS and Android) to scan the QR code from the terminal and test the app on your mobile device.
  - Alternatively, use a simulator:
    ```bash
    npx expo start --ios      # iOS Simulator (Mac only)
    npx expo start --android   # Android Emulator
    ```

## File Structure

- **App.js**: Main app file with navigation and screen components.
- **screens/**: Individual screen components (Home, Activity Details, Profile).
- **assets/**: Images and static assets.

## Dependencies

- Install required dependencies:
  ```bash
  npx expo install react-native-web react-dom @expo/metro-runtime
  ```

## Technologies Used

- **React Native**: Primary framework for cross-platform mobile development.
- **Expo**: Development toolkit for easy testing and building.
- **React Navigation**: For screen navigation.
- **JavaScript (ES6+)**: Programming language.

## Future Enhancements

- **Activity Reviews and Ratings**: Let users leave reviews and ratings for each activity.
- **Map Integration**: Show locations on an interactive map.
- **Advanced Search Filters**: Filter by activity type, cost, or popularity.
- **User Authentication**: Personalized profiles and secure logins.

