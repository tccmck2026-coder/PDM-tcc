import TabNavigation from "@/components/ui/tab-navigation";
import { StyleSheet, Text, View } from "react-native";

export default function Notificacao() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textoInicial}>
                Notificações
                </Text>
            </View>
            <TabNavigation /> 
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },

  header: {
    width: "100%",
    backgroundColor: "#4a7c4e",
    paddingTop: 40,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },

  textoInicial: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
});