import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InicioScreen from './src/screens/InicioScreen';
import SplashScreen from './src/screens/SplashScreen';
import React, { useEffect, useState } from 'react';

export default function App() {
  
    const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); 
    

  return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden/>
      {isLoading ? <SplashScreen /> : <InicioScreen />}
    </View>
  );
}


