import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { sixMonthCourses, sixWeekCourses, Course } from "../data/courses";
import { colors } from "../theme";

const CourseDetailScreen = () => {
  const route = useRoute();
  const { courseId } = route.params as { courseId: string };

  const course: Course | undefined =
    sixMonthCourses.find((c) => c.id === courseId) ||
    sixWeekCourses.find((c) => c.id === courseId);

  if (!course) return <Text style={{ padding: 20 }}>Course not found</Text>;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{course.name}</Text>
      <Text style={styles.fee}>Fee: R{course.fee}</Text>
      <Text style={styles.description}>{course.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  title: { fontSize: 24, fontWeight: "bold", color: colors.primary, marginBottom: 10 },
  fee: { fontSize: 18, fontWeight: "bold", color: colors.secondary, marginBottom: 20 },
  description: { fontSize: 16, lineHeight: 24 },
});

export default CourseDetailScreen;
