import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import TabNavigation from "@/components/ui/tab-navigation";

export default function Envolvidos() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.botaoVoltar}>
          <Ionicons name="arrow-back-outline" size={24} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Envolvidos</Text>
        <View style={styles.espacador} />
      </View>
      <TabNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    backgroundColor: "#4a7c4e",
    paddingTop: 40,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  botaoVoltar: {
    padding: 4,
  },
  titulo: {
    flex: 1,
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  espacador: {
    width: 32, 
  },
});