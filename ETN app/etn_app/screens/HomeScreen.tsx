import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { colors } from "../theme";

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const { width } = Dimensions.get("window");
const buttonHeight = width * 0.25;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image source={require("../screens/logo.png")} style={styles.logoImage} resizeMode="contain" />

      <Text style={styles.logoText}>Empowering the Nation</Text>
      <Text style={styles.description}>
        We empower people by bringing their desired skills to reality.
      </Text>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CourseSummary", { type: "six-month" })}
      >
        <Text style={styles.buttonText}>Six-Month Courses</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CourseSummary", { type: "six-week" })}
      >
        <Text style={styles.buttonText}>Six-Week Courses</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TotalFees")}>
        <Text style={styles.buttonText}>Calculate Total Fees</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Contact")}>
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: { flex: 1, backgroundColor: colors.background },
  container: { alignItems: "center", padding: 20 },
  logoImage: { width: 300, height: 250, marginBottom: 5 },
  logoText: { fontSize: 28, fontWeight: "bold", color: colors.primary, marginBottom: 10 },
  description: { fontSize: 16, color: colors.text, textAlign: "center", marginBottom: 10 },
  button: {
    backgroundColor: colors.primary,
    width: "90%",
    height: buttonHeight,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: { color: colors.secondary, fontSize: 18, fontWeight: "bold" },
});

export default HomeScreen;
