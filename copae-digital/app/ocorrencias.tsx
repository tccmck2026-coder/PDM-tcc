import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import TabNavigation from "@/components/ui/tab-navigation";

const URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const KEY = process.env.EXPO_PUBLIC_SUPABASE_KEY!;

type Ocorrencia = {
  id: number;
  descricao: string;
  data: string;
  nivel: string;
  categorias: string | string[];
  status: string;
  providencias: string;
  envolvidos: string;
};

const NIVEL: Record<string, { backgroundColor: string; color: string }> = {
  Leve: { backgroundColor: "#cce8cc", color: "#14532d" },
  Grave: { backgroundColor: "#fde68a", color: "#713f12" },
  Gravissimo: { backgroundColor: "#fca5a5", color: "#7f1d1d" },
};

const NIVEL_TEXTO: Record<string, string> = { Leve: "Leve", Grave: "Grave", Gravissimo: "Gravíssimo" };
const STATUS: Record<string, string> = { "Em andamento": "#facc15", Finalizado: "#22c55e", Cancelado: "#ef4444" };

function formatarData(valor: string) {
  if (!valor) return "";
  return new Date(`${valor.split("T")[0]}T12:00:00`).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }).replace(".", "");
}

function formatarCategorias(valor: string | string[]) {
  if (!valor) return [];
  if (Array.isArray(valor)) return valor;
  try {
    const resultado = JSON.parse(valor);
    return Array.isArray(resultado) ? resultado : [resultado];
  } catch {
    return [valor];
  }
}

export default function Ocorrencias() {
  const router = useRouter();
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);

  useEffect(() => {
    async function buscar() {
      try {
        const resposta = await fetch(`${URL}/rest/v1/ocorrencia?select=*&order=data.desc`, { headers: { apikey: KEY, Authorization: `Bearer ${KEY}` } });
        if (!resposta.ok) throw new Error(await resposta.text());
        const dados = await resposta.json();
        setOcorrencias(Array.isArray(dados) ? dados : []);
      } catch (erro) {
        console.error("Erro ao buscar ocorrências:", erro);
      }
    }

    buscar();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Ionicons name="arrow-back-outline" size={24} color="#fff" /></TouchableOpacity>
        <Text style={styles.titulo}>Ocorrências</Text>
        <View style={styles.espacador} />
      </View>

      <ScrollView style={styles.lista} contentContainerStyle={styles.listaConteudo}>
        {ocorrencias.map((ocorrencia) => (
          <View key={ocorrencia.id} style={styles.card}>
            <View style={styles.topo}>
              <View style={styles.tags}>
                <Text style={[styles.nivel, NIVEL[ocorrencia.nivel] || NIVEL.Leve]}>{NIVEL_TEXTO[ocorrencia.nivel] || ocorrencia.nivel}</Text>

                {formatarCategorias(ocorrencia.categorias).map((categoria: any, index: number) => {
                  const texto = typeof categoria === "object" ? categoria.valor : categoria;
                  return texto ? <Text key={`${texto}-${index}`} style={styles.categoria}>{texto}</Text> : null;
                })}
              </View>

              <View style={styles.statusContainer}>
                <View style={[styles.statusBolinha, { backgroundColor: STATUS[ocorrencia.status] || "#9ca3af" }]} />
                <Text style={styles.statusTexto}>{ocorrencia.status}</Text>
              </View>
            </View>

            <Text style={styles.descricao}>{ocorrencia.descricao || "Descrição da ocorrência..."}</Text>

            <View style={styles.providenciasBox}>
              <Text style={styles.providenciasTitulo}>☑ Providências</Text>
              <Text style={styles.providenciasTexto}>{ocorrencia.providencias || "Nenhuma providência registrada."}</Text>
            </View>

            <View style={styles.rodape}>
              <View style={styles.envolvidosContainer}>
                <Ionicons name="people-outline" size={15} color="#8f9991" />
                <Text style={styles.envolvidos}>{ocorrencia.envolvidos || "Envolvidos..."}</Text>
              </View>

              <Text style={styles.data}>{formatarData(ocorrencia.data)}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <TabNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  header: {
    width: "100%",
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4a7c4e",
  },

  botaoVoltar: {
    padding: 1,
  },

  titulo: {
    flex: 1,
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },

  espacador: {
    width: 25,
  },

  lista: {
    flex: 1,
  },

  listaConteudo: {
    padding: 12,
  },

  card: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 8,
  },

  topo: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 8,
  },

  tags: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 6,
  },

  nivel: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 15,
    fontSize: 11,
    fontWeight: "600",
  },

  categoria: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#d1d5db",
    borderRadius: 15,
    color: "#374151",
    fontSize: 11,
    fontWeight: "600",
  },

  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingTop: 3,
  },

  statusBolinha: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },

  statusTexto: {
    color: "#6b7280",
    fontSize: 10,
  },

  descricao: {
    marginBottom: 8,
    color: "#9ca3af",
    fontSize: 12,
  },

  providenciasBox: {
    padding: 6,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 6,
  },

  providenciasTitulo: {
    color: "#4a7c4e",
    fontSize: 10,
    fontWeight: "600",
  },

  providenciasTexto: {
    marginTop: 3,
    color: "#9ca3af",
    fontSize: 10,
  },

  rodape: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
  },

  envolvidosContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  envolvidos: {
    color: "#5d3b8c",
    fontSize: 11,
  },

  data: {
    color: "#374151",
    fontSize: 11,
    fontWeight: "600",
  },
});