import { View, Text, StyleSheet, Image, } from "react-native";
import Botao from '@/components/ui/Botao'

export default function Teladelogin() {
  return (
    
     <View style={styles.headerContainer}>
    <View style={styles.container}>
    <Text style={styles.titulo}>COPAE Digital</Text>
        <View style={styles.imagem}>
               <Image 
                 source={require('@/assets/images/img.tcc-1.png')} 
                 resizeMode="contain"
               />
             </View>
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
   headerContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    zIndex: 1,
  },

 titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 1,
    marginBottom: 100,
    fontFamily: "arial",
  },
    imagem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: "100%",
    marginVertical: -120,
  },
})