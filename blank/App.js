/*Zona de importaciones */
import React, { useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native'; 
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';




/*Zona de ejecucion */
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
      {isLoading ? <SplashScreen /> : <HomeScreen />}
    </View>
  );
}

/*Zona de Estilos */
