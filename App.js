import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Discover Fun Places</Text>
      <Button
        title="Explore Hiking Activity"
        onPress={() => navigation.navigate('ActivityDetails')}
      />
      <Button
        title="Explore Beach Activity"
        onPress={() => navigation.navigate('ActivityDetails')}
      />
    </SafeAreaView>
  );
}

function ActivityDetailsScreen() {
  return (
    <SafeAreaView>
      <Text>Hiking at Yosemite</Text>
      <Text>Description: A beautiful hiking trail through Yosemite National Park.</Text>
      <Text>Cost: $20</Text>
      <Button
        title="Log Experience"
        onPress={() => alert('Experience logged!')}
      />
    </SafeAreaView>
  );
}

function ProfileScreen() {
  return (
    <SafeAreaView>
      <Text>User Profile</Text>
      <Text>Logged Activities: Hiking at Yosemite - $20</Text>
      <Text>Next Activity: Beach Sunset - $15</Text>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ActivityDetails" component={ActivityDetailsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
