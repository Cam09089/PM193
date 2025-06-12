/*ZONA 1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

//componnente Propio Texto
const Texto = () => {
  const[contenido,setContenido] = useState('Hola Mundo');
  const actualizarTexto = () => {
    setContenido('Estado Modificado');
  }

  return (
    <Text onPress={actualizarTexto}>{contenido}</Text>
  )
}

const Boton = () => {
  const[contenido,setContenido] = useState('Presionar');
  const actualizarBoton = () => {
    setContenido('Estas tocandomeee');
  }

  return (
    <Button title={contenido} onPress={actualizarBoton}></Button>
  )
}




/*ZONA 2: Main*/ 
export default function App() {
  return (
    <View style={styles.container}>

      <Texto>Hola</Texto>
      <Texto>Mundo</Texto>
      <Texto>react</Texto>
      <Texto>native</Texto>
      <Boton> Presionarlo</Boton>
      <StatusBar style="auto" />
    </View>
  );
}

/*ZONA 3: Estilos- Estetica*/ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
