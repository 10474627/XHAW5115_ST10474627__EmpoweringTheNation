import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { sixMonthCourses, sixWeekCourses } from "../data/courses";
import { useCart } from "../context/CartContext";
import { colors } from "../theme";

type CourseDetailRouteProp = RouteProp<RootStackParamList, "CourseDetail">;

const CourseDetailScreen = () => {
  const route = useRoute<CourseDetailRouteProp>();
  const { id, type } = route.params;
  const { addToCart } = useCart();

  const course =
    type === "six-month"
      ? sixMonthCourses.find((c) => c.id === id)
      : sixWeekCourses.find((c) => c.id === id);

  if (!course) return <Text>Course not found</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.name}</Text>
      <Text style={styles.fee}>Fee: R{course.fee}</Text>
      <Text style={styles.description}>{course.description}</Text>

      {/* Add to Cart button */}
      <TouchableOpacity style={styles.button} onPress={() => addToCart(course)}>
        <Text style={styles.buttonText}>➕ Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  title: { fontSize: 24, fontWeight: "bold", color: colors.primary, marginBottom: 10 },
  fee: { fontSize: 18, marginBottom: 10, color: colors.text },
  description: { fontSize: 16, color: colors.text, marginBottom: 20 },
  button: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: { color: colors.secondary, fontWeight: "bold", fontSize: 18 },
});

export default CourseDetailScreen;
