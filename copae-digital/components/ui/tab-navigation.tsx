import { View, TouchableOpacity, StyleSheet} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabNavigation() {

    return (
        <View style={styles.bottomBar}>
            <TouchableOpacity style={styles.botaoNav} onPress={() => navigation.navigate('/telaprincipal')}>
                <Ionicons name="home-outline" size={24} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoNav} onPress={() => navigation.navigate('/relatorios')}>
                <Ionicons name="document-text-outline" size={24} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoNav} onPress={() => navigation.navigate('/notificacao')}>
                <Ionicons name="notifications-outline" size={24} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoNav} onPress={() => navigation.navigate('/perfil')}>
                <Ionicons name="person-outline" size={24} color="#333" />
            </TouchableOpacity>
        </View>

    )

}

const styles = StyleSheet.create({
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
})


