import Botao from '@/components/ui/Botao';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, View } from "react-native";

export default function Teladelogin() {
   const router = useRouter();
 
   return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/img.tcc-1.png')} 
        resizeMode="cover"
        style={styles.backgroundImage}
      />

      <Text style={styles.titulo}>COPAE Digital</Text>
        
          
      <Botao 
        title="Entrar" 
        onPress={() => router.replace('/telaprincipal')} 
        color="#618668" 
        textColor="#fff" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 1,
    marginBottom: 500,
    fontFamily: "arial",
  },

  backgroundImage: {
    ...StyleSheet.absoluteFill,
  },

});