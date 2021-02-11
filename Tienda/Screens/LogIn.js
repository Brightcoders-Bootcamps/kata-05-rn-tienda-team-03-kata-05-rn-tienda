
import React from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet, ImageBackground, Image} from 'react-native';
import { ceil } from 'react-native-reanimated';


const LogIn = ({navigation})=>
{
  return(
    <View style={styles.mainContainer}>
        <View style={styles.imageConatiner}>
            <ImageBackground style = {styles.Fondo} source={require('../Images/splash.jpg')}>
                <View style={styles.loginContainer}>
                   
                    <Text style={styles.labelText}>Sign In</Text>

                   
                    <TextInput placeholder="domain@example.com" style={styles.input}></TextInput>
                   
                    <TextInput secureTextEntry={true} style={styles.input}></TextInput>                 
                   
                    <TouchableOpacity >
                        <Text style={styles.labelSignUp}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('HomeScreen')}} >
                        <Image style = {styles.flecha} source={require('../Images/flecha.png')}/>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Acount} onPress={()=>{navigation.navigate('SignUp')}} >
                        <Text style={styles.lebel}>CREATE ACOUNT</Text>
                    </TouchableOpacity>
                  
                </View>
            </ImageBackground>
        </View>

       
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer:
    {                
        flex:1,    
    },
    imageConatiner:
    {        
        flex:1,
        flexDirection:'row',
        justifyContent:'center', 
    },
    image:
    {
        width:100,
        height:100
    },
    loginContainer:
    { 
        flex:2,
        padding:30,         
        backgroundColor: 'white',
        justifyContent: 'center',
        borderBottomEndRadius: 70,
        borderBottomLeftRadius: 70
        
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
        flex:1,
        flexDirection:'column',
        justifyContent:'center',        

    },
    button:
    {
        backgroundColor:'#55B6B1',
        width:220,
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        borderRadius:20,     
        marginLeft: 80
    },
    buttonText:
    {
        marginTop:11,
        fontSize:20,
        color:'white'
    },
    Fondo:
    {
        width:370,
        height:630,
    },
    flecha:
    {
        width: 15,
        height: 15,
        marginTop: 21,
        marginRight: 5
    },
    lebel:
    {
        color: 'black',
        fontWeight: 'bold'

    },
    Acount:
    {
        marginTop: 20,
        marginLeft: 125,
        
    }
});

export default LogIn;
