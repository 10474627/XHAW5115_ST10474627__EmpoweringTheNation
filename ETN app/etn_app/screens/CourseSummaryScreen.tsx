import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { sixMonthCourses, sixWeekCourses } from "../data/courses";
import { colors } from "../theme";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type CourseSummaryRouteProp = RouteProp<RootStackParamList, "CourseSummary">;
type NavProp = NativeStackNavigationProp<RootStackParamList, "CourseSummary">;

const CourseSummaryScreen = () => {
  const route = useRoute<CourseSummaryRouteProp>();
  const navigation = useNavigation<NavProp>();
  const { type } = route.params;

  const courses = type === "six-month" ? sixMonthCourses : sixWeekCourses;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {type === "six-month" ? "Six-Month Courses" : "Six-Week Courses"}
      </Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("CourseDetail", { id: item.id, type })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.fee}>R{item.fee}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  title: { fontSize: 24, fontWeight: "bold", color: colors.primary, marginBottom: 20 },
  item: { padding: 15, backgroundColor: colors.secondary, marginBottom: 10, borderRadius: 8 },
  name: { fontSize: 18, fontWeight: "600", color: colors.text },
  fee: { fontSize: 16, color: colors.primary },
});

export default CourseSummaryScreen;
