import TabNavigation from "@/components/ui/tab-navigation";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Ocorrencias() {

  const ocorrencias = [{id:1, descricao: ""},{id:1, descricao: ""}]
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.botaoVoltar}>
          <Ionicons name="arrow-back-outline" size={24} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Ocorrências</Text>
        <View style={styles.espacador} />
      </View>
        <TabNavigation />
    </View>
  );
}

const styles = StyleSheet.create({iner: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
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
    padding: 1,
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
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#b0adad",
    paddingVertical: 5,
    width: -80,
    height: 80,
        
    },
    botaoNav: {
      alignItems: "center",
      justifyContent: "center",
      padding: 30,
    },
});