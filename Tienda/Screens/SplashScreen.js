import React from 'react';
import {View,Text,ImageBackground,TouchableOpacity,StyleSheet, Image} from 'react-native';

const SplashScreen = ({navigation})=>
{
    return(
        <View style={styles.mainContainer}>     
            <ImageBackground style = {styles.Fondo} source={require('../Images/splashh.jpeg')}/>       
            <View>
                <Text style={styles.Tipografia}>Vegezone</Text>                
                <View style = {styles.imagee}>
                    <Image style = {styles.image} source={require('../Images/tienda3.png')}/>
                </View>                
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('LogIn')}} >
                    <Text style={styles.buttonText}>Let's Shop</Text>
                </TouchableOpacity>        
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    mainContainer:
    {                
        flex:1, 
        backgroundColor: '#3cb3ab',
    },
    Fondo:
    {
        width: '100%',
        height:'100%',
        resizeMode: 'cover',      
        opacity: 0.3,  
        position: 'absolute'
    },
    button:
    {
        backgroundColor:'#55B6B1',
        width: '100%',
        height:60,
        flexDirection:'row',
        justifyContent:'center',
        marginTop: 170,
        
    },
    buttonText:
    {
        marginTop:11,
        fontSize:22,
        color:'white',
        fontWeight: 'bold',
    },
    imagee:
    {
        padding: 30,
        backgroundColor:'white',
        width: 140,
        borderRadius: 100,
        marginLeft: 115,
        marginTop: 50,
    },
    image:
    {
        width:80,
        height: 80,        
    },
    Tipografia:
    {
        fontFamily: 'Courgette',
        fontSize: 45,
        marginTop: 120,
        textAlign: 'center',
        color: 'white'
    }
});
export default SplashScreen;
