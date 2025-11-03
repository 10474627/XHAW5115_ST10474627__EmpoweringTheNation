import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useCart } from "../context/CartContext";
import { colors } from "../theme";

const VAT_RATE = 0.15;

const TotalFeesScreen = () => {
  const { cart } = useCart();

  const subtotal = cart.reduce((sum, c) => sum + c.fee, 0);
  const discount = subtotal > 3000 ? subtotal * 0.1 : 0;
  const vat = (subtotal - discount) * VAT_RATE;
  const total = subtotal - discount + vat;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      {cart.length === 0 ? (
        <Text style={styles.empty}>No courses selected.</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.courseName}>{item.name}</Text>
              <Text style={styles.courseFee}>R{item.fee}</Text>
            </View>
          )}
        />
      )}

      <View style={styles.summary}>
        <Text style={styles.summaryText}>Subtotal: R{subtotal}</Text>
        <Text style={styles.summaryText}>Discount: -R{discount}</Text>
        <Text style={styles.summaryText}>VAT (15%): R{vat.toFixed(2)}</Text>
        <Text style={styles.total}>Total: R{total.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  title: { fontSize: 24, fontWeight: "bold", color: colors.primary, marginBottom: 20 },
  empty: { fontSize: 16, color: colors.text },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  courseName: { fontSize: 16, color: colors.text },
  courseFee: { fontSize: 16, fontWeight: "600", color: colors.primary },
  summary: { marginTop: 20, paddingTop: 10, borderTopWidth: 1, borderTopColor: "#ccc" },
  summaryText: { fontSize: 16, marginBottom: 5, color: colors.text },
  total: { fontSize: 20, fontWeight: "bold", color: colors.primary, marginTop: 10 },
});

export default TotalFeesScreen;
