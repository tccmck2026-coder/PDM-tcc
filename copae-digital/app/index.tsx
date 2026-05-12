import React, { useState } from "react";
import { Button, FlatList, Text, View, StyleSheet } from "react-native";
import Botao from "@/components/ui/Botao";

// ... (interfaces Contato e RenderItemProps permanecem iguais)

const RenderItem = ({ contato, aoRemover }: RenderItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={{ flex: 1 }}>{contato.nome}</Text>
      <Button title="-" onPress={() => aoRemover(contato.id)} />
    </View>
  );
};

export default function Index() {
  const [lista, setLista] = useState<Contato[]>([
    { id: 1, nome: "Exemplo de Contato" } // Adicionado para teste visual
  ]);

  function remove(id: number) {
    setLista(lista.filter(item => item.id !== id));
  }

  return (
    <View style={styles.container}>
      {/* NOVO TÍTULO ADICIONADO AQUI */}
      <Text style={styles.titulo}>Bem Vindo!</Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <RenderItem contato={item} aoRemover={remove} />
        )}
        style={{ width: '100%' }}
      />

      <Botao
        title="Começar"
        onPress={() => setLista([])}
        color="#618668"
        textColor="#ffffff"
        style={{ fontWeight: 'bold' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: '#E7F5DC',
    paddingTop: 50 
  },
  titulo: {
    fontSize: 45,          // Tamanho maior
    fontWeight: 'bold',    // Negrito
    textAlign: 'center',   // Centralizado
    marginBottom: 20,      // Espaço até a lista
    color: '#333'          // Cor mais escura
  },
  
});