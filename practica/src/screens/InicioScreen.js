import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  Switch,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

const InicioScreen = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const handleRegistro = () => {
    if (!nombre.trim() || !correo.trim()) {
      Alert.alert('Error', 'Completa todos los campos.');
      return;
    }

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    if (!correoValido) {
      Alert.alert('Error', 'Correo electrónico no válido.');
      return;
    }

    if (!aceptaTerminos) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones.');
      return;
    }

    Alert.alert('Éxito', `Registro exitoso.\nNombre: ${nombre}\nCorreo: ${correo}`);
  };

  return (
    <ImageBackground
      source={require('../assets/images.jpg')} 
      style={styles.background}
    >
      <SafeAreaView style={styles.overlay}>
        
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.label}>Nombre completo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu nombre"
            value={nombre}
              onChangeText={setNombre}
            />

            <Text style={styles.label}>Correo electrónico:</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingresa tu correo"
              value={correo}
              onChangeText={setCorreo}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <View style={styles.switchContainer}>
              <Text style={styles.label}>Aceptar términos y condiciones</Text>
              <Switch
                value={aceptaTerminos}
                onValueChange={setAceptaTerminos}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRegistro}>
              <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
          </ScrollView>
      
      </SafeAreaView>
    </ImageBackground>
  );
};

export default InicioScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#00ADB5',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
