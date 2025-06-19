/*ZONA 1: Importaciones */

import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';


/*ZONA 2: Main*/ 
export default function App() {

    const [defaultText, onChangeDefault] = useState('');

    const [numberPadText, setNumberPadText] = useState('');

    const [decimalPadText, setDecimalPadText] = useState('');

    const [numericText, setNumericText] = useState('');

    const [emailText, setEmailText] = useState('');

    const [phoneText, setPhoneText] = useState('');

    const [urlText, setUrlText] = useState('');

    const [visiblePassword, setVisiblePassword] = useState('');




  return (
    <View style={styles.container}>

      <Text style={styles.label}>default: </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeDefault}
        value={defaultText}
        placeholder="Escribe solo texto"
        keyboardType="default"
      />

      <Text style={styles.label}>number-pad: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa solo números"
        keyboardType="number-pad"
        value={numberPadText}
        onChangeText={setNumberPadText}
      />

      <Text style={styles.label}>decimal-pad: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa números decimales"
        keyboardType="decimal-pad"
        value={decimalPadText}
        onChangeText={setDecimalPadText}
      />

      <Text style={styles.label}>numeric: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa números"
        keyboardType="numeric"
        value={numericText}
        onChangeText={setNumericText}
      />

      <Text style={styles.label}>email-address: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa correo electrónico"
        keyboardType="email-address"
        value={emailText}
        onChangeText={setEmailText}
        autoCapitalize="none"
      />

      <Text style={styles.label}>phone-pad: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa teléfono"
        keyboardType="phone-pad"
        value={phoneText}
        onChangeText={setPhoneText}
      />

      <Text style={styles.label}>url:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa URL"
        keyboardType="url"
        value={urlText}
        onChangeText={setUrlText}
        autoCapitalize="none"
      />

      <Text style={styles.label}>visible-password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa Contraseña"
        keyboardType="visible-password"
        value={visiblePassword}
        onChangeText={setVisiblePassword}
        secureTextEntry={false}
        autoCapitalize="none"
      />



      <StatusBar style="auto" />
    </View>
  );
}


/*ZONA 3: Estilos- Estetica*/ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
