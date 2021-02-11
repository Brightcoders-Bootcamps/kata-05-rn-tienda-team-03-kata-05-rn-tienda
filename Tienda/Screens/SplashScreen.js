import React from 'react';
import {View,Text,ImageBackground,TouchableOpacity,StyleSheet, Image} from 'react-native';

const SplashScreen = ({navigation})=>
{
  return(
    <View style={styles.mainContainer}>
      
        <View>   
                <ImageBackground style = {styles.Fondo} source={require('../Images/splashh.jpeg')}/>       
        </View>

        <View>
        <Text style={styles.Tipografia}>VEGEZONE</Text>
                
                <View style = {styles.imagee}>
                    <Image style = {styles.image} source={require('../Images/tienda.png')}/>
                </View>
                

                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('LogIn')}} >
                    <Text style={styles.buttonText}>
                        Let's Shop
                    </Text>
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
    imagee:
    {
        padding: 30,
        backgroundColor:'#55B6B1',
        width: 140,
        borderRadius: 100,
        marginLeft: 115,
    },
    image:
    {
        width:80,
        height: 80,        
    },
    Fondo:
    {
        width: 379,
        height:630,
        resizeMode: 'cover',     
        backgroundColor: 'green', 
        opacity: 0.5,  
        position: 'absolute'
    },
    button:
    {
        backgroundColor:'#55B6B1',
        width: 360,
        height:60,
        flexDirection:'row',
        justifyContent:'center',
        marginTop: 250,
        
    },
    buttonText:
    {
        marginTop:11,
        fontSize:20,
        color:'white'
    },
    Tipografia:
    {
        fontSize: 20,
        marginTop: 80,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    }
});

export default SplashScreen;


/* */