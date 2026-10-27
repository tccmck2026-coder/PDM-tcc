import Botao from '@/components/ui/Botao';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function TelaInicial() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      
      <View style={styles.headerContainer}>
        <Text style={styles.boasVindas}>BEM VINDO!</Text>
        <Text style={styles.subtituloPrincipal}>COPAE Digital</Text>
        
        <Text style={styles.descricao}>
          Registro e acompanhamento de ocorrências.
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image 
          source={require('@/assets/images/img tcc.png')} 
          style={styles.ilustracao}
          resizeMode="contain"
        />
      </View>
      <View style={styles.footerContainer}>
        
        <Botao 
          title="Começar" 
          onPress={() => router.replace('/teladelogin')} 
          color="#618668" 
        />        

        <Image 
          source={require('@/assets/images/if_logo.png')} 
          style={styles.logoIf} 
          resizeMode="contain" 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7f5dc',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 40, 
    paddingBottom: 30,
  },

 headerContainer: {
  width: '100%',
  alignItems: 'center',
  zIndex: 2,
},

  boasVindas: {
    fontSize: 38,
    fontWeight: '900', 
    color: '#000000',
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  subtituloPrincipal: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 1,
    marginBottom: 25,
  },

  descricao: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxHeight: '90%',
    marginVertical: -120,
  },

  ilustracao: {
    flex: 1,
    height: '100%',
    tintColor: undefined, 
    ...({ mixBlendMode: 'multiply' } as any), 
  },

  footerContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 25,
  },
  
  logoIf: {
    width: 100,
    height: 60,
  },
});
