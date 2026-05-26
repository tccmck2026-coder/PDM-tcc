import { View, Text, StyleSheet } from "react-native";

export default function TelaTitulo() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>COPAE Digital</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
});