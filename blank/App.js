/*ZONA 1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Texto = (props) => {
  const{children} = props;

  return (
    <Text>{children}</Text>
  );
}

/*ZONA 2: Main*/ 
export default function App() {
  return (
    <View style={styles.container}>

      <Texto>Hola</Texto>
      <Texto>Mundo</Texto>
      <Texto>react</Texto>
      <Texto>native</Texto>
      <Button title='Presionar'> </Button>
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
