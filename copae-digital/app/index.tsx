import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Botao from '@/components/ui/Botao';
import { useRouter } from 'expo-router';

export default function TelaInicial() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      
      <View style={styles.headerContainer}>
        <Text style={styles.boasVindas}>BEM VINDO!</Text>
        <Text style={styles.subtituloPrincipal}>COPAE Digital</Text>
        
        <Text style={styles.descricao}>
          Registro e acompanhamento de ocorrências escolares de forma simples e eficiente.
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
        <View style={styles.buttonWrapper}>
          <Botao 
            title="Começar" 
            onPress={() => router.push('/teladelogin')} 
            color="#618668" 
            textColor="#ffffff" 
            style={styles.botaoTexto}
          />
        </View>

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
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 15,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxHeight: '100%',
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
  buttonWrapper: {
    width: 250,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    alignItems: "center",
    justifyContent: "center",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  botaoTexto: {
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: '600',

  },
  logoIf: {
    width: 100,
    height: 60,
  },
});
