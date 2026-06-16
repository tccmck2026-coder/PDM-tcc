import { ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from 'expo-router';
import TabNavigation from "@/components/ui/tab-navigation";

export default function TelaPrincipal() {
  const router = useRouter(); 

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>COPAE Digital</Text>
          <Text style={styles.subtitulo}>Gestão de Ocorrências - IFPB</Text>
        </View>

        <ScrollView style={styles.conteudo} contentContainerStyle={styles.conteudoInner}>
          <View style={styles.botoesGrid}>

            <TouchableOpacity 
              style={styles.botaoCard}  onPress={() => router.push('/ocorrencias')}>  
              <Ionicons name="document-text-outline" size={36} color="#4a7c4e" />
              <Text style={styles.botaoCardTexto}>Ocorrências</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.botaoCard} onPress={() => router.push('/envolvidos')}>
              <Ionicons name="people-outline" size={36} color="#4a7c4e" />
              <Text style={styles.botaoCardTexto} >Envolvidos</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TabNavigation/>
        
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
    gap: 50,
    marginTop: 50,
  },
  botaoCard: {
    width: 125,
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#b0adad",
    gap: 5,
  },
  botaoCardTexto: {
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
  },
});