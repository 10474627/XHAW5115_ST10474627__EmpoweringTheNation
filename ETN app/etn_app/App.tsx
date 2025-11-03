import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CourseSummaryScreen from "./screens/CourseSummaryScreen";
import CourseDetailScreen from "./screens/CourseDetailScreen";
import TotalFeesScreen from "./screens/TotalFeesScreen";
import ContactScreen from "./screens/ContactScreen";
import { CartProvider } from "./context/CartContext";

export type RootStackParamList = {
  Home: undefined;
  CourseSummary: { type: "six-month" | "six-week" };
  CourseDetail: { id: string; type: "six-month" | "six-week" };
  TotalFees: undefined;
  Contact: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CourseSummary" component={CourseSummaryScreen} />
          <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
          <Stack.Screen name="TotalFees" component={TotalFeesScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
