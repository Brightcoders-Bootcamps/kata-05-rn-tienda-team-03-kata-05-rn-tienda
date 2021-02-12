import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image} from 'react-native';




const LogIn = ({navigation})=>
{
  return(
    <View style={styles.mainContainer}>
      
        <View>
            <ImageBackground style = {styles.Fondo} source={require('../Images/splashh.jpeg')}/>
        </View>

            <View style={styles.loginContainer}>
                    
                <Text style={styles.labelText}>Sign In</Text>
                    
                    <TextInput placeholder="domain@example.com" style={styles.input}></TextInput>
                    
                    <TextInput placeholder="Password" secureTextEntry={true} style={styles.input}></TextInput>                 
                    
                    <TouchableOpacity >
                        <Text style={styles.labelSignUp}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('HomeScreen')}} >
                        <Image style = {styles.flecha} source={require('../Images/flecha.png')}/>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
            </View>

                <View style={styles.buttonContainer}>                
                    <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}} >
                        <Text style={styles.lebel}>CREATE ACOUNT</Text>
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
        marginLeft: 90
        
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
    
});

export default LogIn;
