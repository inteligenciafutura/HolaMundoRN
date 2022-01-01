import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';

export default App = () => {
const [Nombre, setNombre] = useState('Inteligencia Futura');

function Login(){
 alert("Bienvenido :" + Nombre );
}

return (
<ImageBackground source={require('./assets/fondo.png')} style={styles.container}>
<View style={styles.header}>

<View style={styles.headerLeft}>
<Image source={require('./assets/logo.png')} style={styles.logo} />
</View>

<View style={styles.headerRight}>
<Button title='Login' onPress = {Login} />
</View>

</View>


<View style={[styles.body, styles.negrita]}>
<TouchableOpacity>
<Text style={styles.textColorSaludo}>Hola {Nombre}</Text>
<TextInput 
placeholder="Nombre de usuario" 
placeholderTextColor="white" 
maxLength={28}
onChangeText={setNombre} 
style={{
  borderWidth:1, 
  borderRightColor:'white', 
  padding: 5, 
  marginTop: 10 
  }} />
</TouchableOpacity>
</View>

<View style={styles.footer}>
<View style={[styles.flex,styles.footerLeft]}>
<Text style={styles.textColor}>Diseño 3D</Text>
</View>
<View style={[styles.flex,styles.footerCenter]}>
<Text style={styles.textColor}>Desarrollo de videojuegos</Text>
</View>
<View style={[styles.flex, styles.footerRight]}>
<Image source={require('./assets/logo.png')} style={styles.logo} />
</View>
</View>
</ImageBackground>
);
};

// React Native Styles
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'green'
    },
    negrita:{
    fontWeight:'bold'
    },
    textColor:{
    color:'white'
    },
    textColorSaludo:{
      color:"black",
      fontWeight: "bold"
    },
    header:{
    flex: 0.5,
    flexDirection:'row',
    marginTop: 30
    },
    headerLeft:{
    flex: 1,
    },
    headerRight:{
    flex: 0.3,
    marginRight:10
    },
    body:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
    },
    logo: {
    width: 100,
    height: 60,
    borderRadius: 30,
    resizeMode: 'contain'
    },
    footer:{
    flex: 1,
    flexDirection:'row'
    },
    flex: {
    flex:1
    },
    footerLeft:{
    alignItems: 'center',
    justifyContent:'center'
    },
    footerCenter:{
    alignItems: 'center',
    justifyContent:'center'
    },
    footerRight:{
    alignItems:'flex-end',
    justifyContent:'center'
    }
});