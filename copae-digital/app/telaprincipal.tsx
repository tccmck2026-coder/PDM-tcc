import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TelaPrincipal() {
  const [lista, setLista] = useState([]);
  const [prioridadesAberta, setPrioridadesAberta] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>COPAE Digital</Text>
        <Text style={styles.subtitulo}>Gestão de Ocorrências - IFPB</Text>
      </View>

      <ScrollView style={styles.conteudo} contentContainerStyle={styles.conteudoInner}>

        <View style={styles.botoesGrid}>
          <TouchableOpacity style={styles.botaoCard}>
            <View style={styles.iconeContainer}>
              <Text style={styles.icone}>📋</Text>
            </View>
            <Text style={styles.botaoCardTexto}>Ocorrências</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoCard}>
            <View style={styles.iconeContainer}>
              <Text style={styles.icone}>👥</Text>
            </View>
            <Text style={styles.botaoCardTexto}>Envolvidos</Text>
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setPrioridadesAberta(!prioridadesAberta)}
        > */}
          {/* <Text style={styles.dropdownTexto}>Prioridades</Text>
          <Text style={styles.dropdownSeta}>{prioridadesAberta ? "▲" : "▼"}</Text>
        </TouchableOpacity> */}

      </ScrollView>

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

  ocorrencia: {
    backgroundColor: "#94171799",
    height: "auto",
    alignItems: "flex-end",
  },

  botaoOcorrencia: {},

  header: {
    width: "100%",
    backgroundColor: "#4a7c4e",
    paddingTop: 40,
    paddingBottom: 16,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  subtitulo: {
    fontSize: 13,
    color: "#d4ecd6",
    marginTop: 2,
  },

  conteudo: {
    flex: 1,
    width: "100%",
  },

  conteudoInner: {
    padding: 20,
    alignItems: "flex-start",
  },

  botoesGrid: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,
    marginTop: 8,
  },

  botaoCard: {
    width: 120,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#e8e8e8",
  },

  iconeContainer: {
    marginBottom: 8,
  },

  icone: {
    fontSize: 36,
  },

  botaoCardTexto: {
    fontSize: 13,
    color: "#333",
    fontWeight: "500",
  },

  dropdown: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },

  dropdownTexto: {
    fontSize: 15,
    color: "#333",
  },

  dropdownSeta: {
    fontSize: 12,
    color: "#666",
  },

  dropdownLista: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderTopWidth: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "#fff",
    marginTop: -1,
  },

  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 14,
    color: "#444",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },

  navbar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#e8e8e8",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },

  navItem: {
    alignItems: "center",
    paddingHorizontal: 16,
  },

  navIcone: {
    fontSize: 22,
  },
});
''