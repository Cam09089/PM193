/*ZONA 1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

//componnente Propio Texto
const Texto = ({style}) => {
  const[contenido,setContenido] = useState('Hola Mundo');


  const actualizarTexto = () => {
    setContenido('Estado Modificado');
  }

  return (
    <Text style={[styles.Text, style]} onPress={actualizarTexto}>{contenido}</Text>
  )
}
//componente Propio Boton
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

      <Texto style={styles.morado}>Hola</Texto>
      <Texto style={styles.verde}>Mundo</Texto>
      <Texto style={styles.rojo}>react</Texto>
    
      <StatusBar style="auto" />

    </View>
  );
}

/*ZONA 3: Estilos- Estetica*/ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-stretch',
    justifyContent: 'space-around',
 
  },
  Text: {
    color: 'pink',
    fontSize: 30,
    height: 150,
    width: 150,
  },
  // Colores personalizados
  morado: {backgroundColor: 'purple'},
  verde: {backgroundColor: 'green'},
  rojo: {backgroundColor: 'red'},
});

