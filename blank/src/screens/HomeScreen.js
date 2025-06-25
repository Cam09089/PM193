import React from "react";
import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from "react-native-web";

const HomeScreen = () => {
    return(
        <ImageBackground
        source={require('C:/laragon/www/PM193/blank/src/assets/descarga.jpeg')}
        style={styles.background}
        >
        <SafeAreaView style={styles.content}>
        <Text style={styles.text}>Pantalla Principal</Text>
        </SafeAreaView>
        
        </ImageBackground>
    );
};

export default HomeScreen;


const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent:'center',
        
    },
    content: {
        alignItems:'center',
    },
    text:{
        color:'#fff',
        fontSize:28,
        fontWeight:'bold'
    }
});