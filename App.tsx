import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CoursesScreen from './screens/CoursesScreen';
import CalculateFeesScreen from './screens/CalculateFeesScreen';
import ContactScreen from './screens/ContactScreen';
import CourseDetailScreen from './screens/CourseDetailScreen';
import { RootStackParamList } from './types';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();


function CoursesStack() {
  return (
    <Stack.Navigator initialRouteName="CoursesHome">
      <Stack.Screen name="CoursesHome" component={CoursesScreen} options={{ title: 'Courses' }} />
      <Stack.Screen name="CourseDetailScreen" component={CourseDetailScreen} options={{ title: 'Course Detail' }} />
    </Stack.Navigator>
  );
}


function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="HomeMain">
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'Home' }} />
    </Stack.Navigator>
  );
}


function CalculateFeesStack() {
  return (
    <Stack.Navigator initialRouteName="CalculateFeesMain">
      <Stack.Screen name="CalculateFeesMain" component={CalculateFeesScreen} options={{ title: 'Calculate Fees' }} />
    </Stack.Navigator>
  );
}


function ContactStack() {
  return (
    <Stack.Navigator initialRouteName="ContactMain">
      <Stack.Screen name="ContactMain" component={ContactScreen} options={{ title: 'Contact' }} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Courses" component={CoursesStack} />
        <Tab.Screen name="CalculateFees" component={CalculateFeesStack} />
        <Tab.Screen name="Contact" component={ContactStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



