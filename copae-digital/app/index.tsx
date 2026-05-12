import React, { useState } from "react";
import { Button, FlatList, Text, TextInput, View, StyleSheet } from "react-native";
import Botao from "@/components/ui/Botao";
import { nextId } from "../util/geral";

interface Contato {
  id: number;
  nome: string
}

interface RenderItemProps {
  contato: Contato;
  aoRemover: (id: number) => void;
}

const RenderItem = ({ contato, aoRemover }: RenderItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={{ flex: 1 }}>{contato.nome}</Text>
      <Button
        title="-"
        onPress={() => aoRemover(contato.id)}
      />
    </View>
  );
};

export default function Index() {
  const [nome, setNome] = useState('');
  const [lista, setLista] = useState<Contato[]>([]);

  function adiciona() {
    if (nome.trim() === '') return; 
    setLista([...lista, { id: nextId(lista), nome: nome }]);
    setNome('');
  }

  function remove(id: number) {
    setLista(lista.filter(item => item.id !== id));
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          placeholder="Digite um nome ..."
          value={nome}
          onChangeText={t => setNome(t)}
          style={styles.input}
        />
        <Button 
          title="+"
          onPress={adiciona}
        />
      </View>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <RenderItem contato={item} aoRemover={remove} />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 2 }} />}
        style={{ width: '100%' }}
      />

      <Botao
        title="Limpar lista"
        onPress={() => setLista([])}
        color="#0000ff"
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
    backgroundColor: 'white',
    paddingTop: 50 
  },
  inputRow: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
    width: '100%',
    padding: 10,
    alignItems: 'center'
  }
});
