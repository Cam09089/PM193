import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native-web";

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('C:/laragon/www/PM193/blank/src/assets/love.jpeg')}
                style={styles.logo}
                resizeMode="contain"
                />
        
            <Text style={styles.title}>
                Bienvenido a la App

            </Text>
        </View>
    );
};
export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#222831',
        justifyContent:'center',
        alignItems:'center'
    },
    logo: {
        width:200,
        height:200
    },
    title:{
        marginTop:20,
        color:'#eeeeee',
        fontSize:24,
        fontWeight:'bold'
    }

});