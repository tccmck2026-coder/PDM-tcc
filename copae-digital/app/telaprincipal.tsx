import { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function TelaPrincipal() {
  const [lista, setLista] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>COPAE Digital</Text>
      <View style={styles.ocorrencia}>
        <Button style={styles.botaoOcorrencia}>
          <Image></Image>
          <Text>COPAE Digital</Text>
        </Button>        
        
      </View>
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

  botaoOcorrencia: {
    backgroundColor: "#fbf7f799",
    height: "auto",
    alignItems: "flex-end",
  },
});