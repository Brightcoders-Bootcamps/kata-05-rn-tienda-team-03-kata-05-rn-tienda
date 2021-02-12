import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image} from 'react-native';


const SignUp = ({navigation})=>
{
  return(
    <View style={styles.mainContainer}>
      
    <View>
        <ImageBackground style = {styles.Fondo} source={require('../Images/splashh.jpeg')}/>
    </View>

        <View style={styles.loginContainer}>

            <TouchableOpacity onPress={()=>{navigation.navigate('SplashScreen')}}>
                <Image style={styles.cancelar} source={require('../Images/cancelar.png')}/>
            </TouchableOpacity>
           
                
            <Text style={styles.labelText}>Create Account</Text>
                
                <TextInput placeholder="Full Name" style={styles.input}></TextInput>

                <TextInput placeholder="Email" style={styles.input}></TextInput>
                
                <TextInput placeholder="Password" secureTextEntry={true} style={styles.input}></TextInput>                 
                
               

                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('HomeScreen')}} >
                    <Image style = {styles.flecha} source={require('../Images/flecha.png')}/>
                    <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
        </View>

            <View style={styles.buttonContainer}>                
                <TouchableOpacity onPress={()=>{navigation.navigate('LogIn')}}>
                    <Text style={styles.lebel}>Sign In</Text>
                </TouchableOpacity>                    
            </View>
   
</View>
  );
}

const styles = StyleSheet.create({
  mainContainer:
  {                
      flex:1,    
  },
  image:
  {
      width:100,
      height:100
  },
  loginContainer:
  { 
      height: 520,
      padding:30,         
      backgroundColor: 'white',
      justifyContent: 'center',
      borderBottomEndRadius: 70,
      borderBottomLeftRadius: 70,
      position: 'absolute'    
  },
  input:
  {         
      borderBottomWidth:1       
  },
  labelText:
  {
      fontSize:20,  
      color: 'gray',
      fontWeight: 'bold',
      marginBottom: 50,
      marginTop: 40,
      textAlign: 'center'
  },
  labelSignUp:
  {
      color:'#ADC1D4',
      marginTop:5,
      textAlign: 'center'
  },
  buttonContainer:
  {          
    marginTop: 550,
    marginLeft: 140    
  },
  button:
  {
    padding: 10,
    backgroundColor:'#55B6B1',
    width:290,
    height:50,
    flexDirection:'row',
    justifyContent:'center',
    borderRadius:20,     
    marginLeft: 10,
    marginTop: 120
  },
  buttonText:
  {
    marginTop: 2,
    fontSize:15,
    color:'white'
  },
  flecha:
  {
      width: 15,
      height: 15,
      marginTop: 8,
      marginRight: 5
  },
  Fondo:
  {
      width: 370,
      height:630,
      position: 'absolute',
      resizeMode: 'cover',     
      backgroundColor: 'green', 
      opacity: 0.5,  
  },
  lebel:
  {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20
  },
  cancelar:
  {
    width: 20,
    height: 20,
    marginLeft: 280
  }
});

export default SignUp;
