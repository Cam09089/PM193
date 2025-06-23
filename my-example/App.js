/*ZONA 1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';


//ZONA 2: Main 
export default function App() {

  const [defaultText, onChangeDefault] = useState('');

  const [numberPadText, setNumberPadText] = useState('');

  const [decimalPadText, setDecimalPadText] = useState('');

  const [numericText, setNumericText] = useState('');

  const [emailText, setEmailText] = useState('');

  const [phoneText, setPhoneText] = useState('');

  const [urlText, setUrlText] = useState('');

  const [visiblePassword, setVisiblePassword] = useState('');

  // Validaciones 
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPhone = (phone) => /^[0-9]{7,15}$/.test(phone);

  const isValidUrl = (url) => /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(\/[\w.-])\/?$/.test(url);

  const isNumeric = (value) => /^[0-9]+$/.test(value);

  const isDecimal = (value) => /^[0-9]*\.?[0-9]+$/.test(value);

  return (
    // Componente principal que renderiza la pantalla
    <ScrollView contentContainerStyle={styles.container}>
      
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
        onChangeText={(text) => {
          if (isNumeric(text) || text === '') setNumberPadText(text);
        }}
      />

      <Text style={styles.label}>decimal-pad: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa números decimales"
        keyboardType="decimal-pad"
        value={decimalPadText}
        onChangeText={(text) => {
          if (isDecimal(text) || text === '') setDecimalPadText(text);
        }}
      />

      <Text style={styles.label}>numeric: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa números"
        keyboardType="numeric"
        value={numericText}
        onChangeText={(text) => {
          if (isNumeric(text) || text === '') setNumericText(text);
        }}
      />

      <Text style={styles.label}>email-address: </Text>
      <TextInput
        style={[styles.input, !isValidEmail(emailText) && emailText ? styles.errorInput : null]}
        placeholder="Ingresa correo electrónico"
        keyboardType="email-address"
        value={emailText}
        onChangeText={setEmailText}
        autoCapitalize="none"
      />
      {!isValidEmail(emailText) && emailText !== '' && (
        <Text style={styles.errorText}>Correo inválido</Text>
      )}

      <Text style={styles.label}>phone-pad: </Text>
      <TextInput
        style={[styles.input, !isValidPhone(phoneText) && phoneText ? styles.errorInput : null]}
        placeholder="Ingresa teléfono"
        keyboardType="phone-pad"
        value={phoneText}
        onChangeText={setPhoneText}
      />
      {!isValidPhone(phoneText) && phoneText !== '' && (
        <Text style={styles.errorText}>Teléfono inválido</Text>
      )}

      <Text style={styles.label}>url:</Text>
      <TextInput
        style={[styles.input, !isValidUrl(urlText) && urlText ? styles.errorInput : null]}
        placeholder="Ingresa URL"
        keyboardType="url"
        value={urlText}
        onChangeText={setUrlText}
        autoCapitalize="none"
      />
      {!isValidUrl(urlText) && urlText !== '' && (
        <Text style={styles.errorText}>URL inválida</Text>
      )}

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
    </ScrollView>
  );
}


//ZONA 3: Estilos- Estética
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 80,
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
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 4,
  },
});