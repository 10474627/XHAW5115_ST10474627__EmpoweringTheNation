import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import CourseSummaryScreen from "../screens/CourseSummaryScreen";
import CourseDetailScreen from "../screens/CourseDetailScreen";
import TotalFeesScreen from "../screens/TotalFeesScreen";
import ContactScreen from "../screens/ContactScreen";

export type RootStackParamList = {
  Home: undefined;
  CourseSummary: { type: "six-month" | "six-week" };
  CourseDetail: { courseId: string };
  TotalFees: undefined;
  Contact: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CourseSummary" component={CourseSummaryScreen} />
        <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
        <Stack.Screen name="TotalFees" component={TotalFeesScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
