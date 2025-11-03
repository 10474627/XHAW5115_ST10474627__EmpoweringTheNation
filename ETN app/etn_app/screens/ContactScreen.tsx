import React from "react";
import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { colors } from "../theme";

const ContactScreen = () => {
  const latitude = -26.2041; // Example: Johannesburg
  const longitude = 28.0473;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.info}>Empowering the Nation Training Institute</Text>
      <Text style={styles.info}>123 Main Street, Johannesburg, South Africa</Text>

      <TouchableOpacity onPress={() => Linking.openURL("tel:+27110000000")}>
        <Text style={styles.link}>📞 +27 11 000 0000</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL("mailto:info@etn.co.za")}>
        <Text style={styles.link}>✉️ info@etn.co.za</Text>
      </TouchableOpacity>

      {/* Map */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{ latitude, longitude }}
          title="Empowering the Nation"
          description="Training Institute"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 15,
  },
  info: { fontSize: 16, marginBottom: 5, color: colors.text },
  link: {
    fontSize: 16,
    color: colors.primary,
    marginBottom: 10,
    textDecorationLine: "underline",
  },
  map: { flex: 1, marginTop: 20, borderRadius: 12 },
});

export default ContactScreen;
