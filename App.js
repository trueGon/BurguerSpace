import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Image, TouchableOpacity, Button } from 'react-native';
  import React from 'react';


export default function App() {
  return (
    
      <View style={styles.container}>

     <View style = {styles.loginPage}>
    
<Image style = {styles.planeta} source={require('./assets/burguer.png')} />
<Text style = {styles.login}>
SPACE BURGUER 
</Text>
<TextInput style = {styles.txtInput1} placeholder='E-mail'>

  </TextInput>
  <TextInput style = {styles.txtInput2} placeholder='Senha' secureTextEntry={true}>

  </TextInput>

  <TouchableOpacity style = {styles.btn1} >
    <Text style = {{color : 'white', fontSize : 25,}} > ENTRAR</Text>
  </TouchableOpacity>
 <View style = {styles.formato}>

 <View style = {styles.txtTouch1}>
 <TouchableOpacity  >
    <Text style = {styles.txtRodape1}> GOOGLE</Text>
  </TouchableOpacity>
  
  </View >
  <View style = {styles.txtTouch2}>
  <TouchableOpacity  >
    <Text style = {styles.txtRodape2}> FACEBOOK</Text>
  </TouchableOpacity>
  </View>
 </View>

 </View>
    
    </View>

    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
   
  },




 bloco:{
marginTop: 2,
 },

 loginPage : {
  alignItems: 'center',
 },

 planeta : {
height : 100,
width: 100,
marginTop : 100,

 },

login: {
color : '#FFDE00',
fontSize : 30,
borderWidth : 2,
borderRadius : 10,
padding: 5,
borderColor : 'white',
},

txtInput1: {
  backgroundColor : 'white',
  width: 250,
  margin : 5,
  borderRadius : 100,
  color : 'black',
  padding : 10,
  fontSize : 20,
  marginTop : 100,
  borderColor : 'orange',
  borderWidth : 2,
  
},
txtInput2: {
  backgroundColor : 'white',
  width: 250,
  margin : 5,
  borderRadius : 100,
  color : 'black',
  padding : 10,
  fontSize : 20,
  borderColor : 'orange',
  borderWidth : 2,
  
},
btn1: {
  backgroundColor : '#FD5900',
  margin: 25,
  padding : 10,
  width : 125,
  borderRadius: 100,
  borderWidth : 2,
  borderColor : 'white',
 
},
formato : {
  backgroundColor : '#D54B00',
  width : 500,
  height : 250,
  borderTopLeftRadius : 250,
  borderBottomRightRadius: 250,
  alignItems : 'center'

},

txtTouch1: {
  backgroundColor : '#FFDE00',
  alignItems : 'center',
  width : 250,
  padding: 8,
  marginTop : 60,
  borderRadius : 20,
  borderWidth : 2,
  
},

txtTouch2: {
  backgroundColor : '#FFDE00',
  width : 250,
  padding: 8,
  marginTop : 10,
  borderRadius : 20,
  alignItems : 'center',
  borderWidth : 2,
 

},

txtRodape1: {
  color: 'black',

  
},
txtRodape2: {
  color: 'black',

},
}
);
