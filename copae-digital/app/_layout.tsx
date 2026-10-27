import { Stack } from "expo-router";

export default () => {
    return (
        <Stack>
            <Stack.Screen 
                name="index" 
                options={{ 
                    headerShown: false
                }} 
            />
            <Stack.Screen 
                name="teladelogin" 
                options={{ 
                    headerShown: false
                }} 
            />
            <Stack.Screen 
                name="telaprincipal" 
                options={{ 
                    headerShown: false
                }} 
            />
            <Stack.Screen 
                name="ocorrencias" 
                options={{ 
                    title: "Ocorrências",
                    headerStyle: {
                        backgroundColor: "#4a7c4e",
                    },
                    headerTintColor: "#fff",
                }} 
            />
            <Stack.Screen 
                name="notificacao" 
                options={{ 
                    title: "Notificações",
                    headerStyle: {
                        backgroundColor: "#4a7c4e",
                    },
                    headerTintColor: "#fff",
                }} 
            />
        </Stack>
    );
}