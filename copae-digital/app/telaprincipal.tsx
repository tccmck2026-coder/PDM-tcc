import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TelaPrincipal() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>COPAE Digital</Text>
        <Text style={styles.subtitulo}>Gestão de Ocorrências - IFPB</Text>
      </View>

      <ScrollView style={styles.conteudo} contentContainerStyle={styles.conteudoInner}>
        <View style={styles.botoesGrid}>
          <TouchableOpacity style={styles.botaoCard}>
  <Ionicons name="document-text-outline" size={36} color="#4a7c4e" />
  <Text style={styles.botaoCardTexto}>Ocorrências</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.botaoCard}>
  <Ionicons name="people-outline" size={36} color="#4a7c4e" />
  <Text style={styles.botaoCardTexto}>Envolvidos</Text>
</TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
  <TouchableOpacity style={styles.botaoNav}>
    <Ionicons name="home-outline" size={24} color="#333" />
  </TouchableOpacity>
  <TouchableOpacity style={styles.botaoNav}>
    <Ionicons name="document-text-outline" size={24} color="#333" />
  </TouchableOpacity>
  <TouchableOpacity style={styles.botaoNav}>
    <Ionicons name="notifications-outline" size={24} color="#333" />
  </TouchableOpacity>
  <TouchableOpacity style={styles.botaoNav}>
    <Ionicons name="person-outline" size={24} color="#333" />
  </TouchableOpacity>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#fff",
  borderTopWidth: 1,
  borderTopColor: "#b0adad",
  paddingVertical: 12,
},
botaoNav: {
  alignItems: "center",
  justifyContent: "center",
  padding: 8,
},
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    backgroundColor: "#4a7c4e",
    paddingTop: 40,
    paddingBottom: 16,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  titulo: {
    fontSize: 32,
    marginTop: -10,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subtitulo: {
    fontSize: 15,
    color: "#d4ecd6",
    marginTop: 2,
  },
  conteudo: {
    flex: 1,
    width: "100%",
  },
  conteudoInner: {
    padding: 20,
    alignItems: "center",
  },
  botoesGrid: {
    flexDirection: "row",
    gap: 30,
    marginTop: 8,
  },
  botaoCard: {
    width: 120,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#b0adad",
    gap: 8,
  },
  botaoCardTexto: {
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
  },
});