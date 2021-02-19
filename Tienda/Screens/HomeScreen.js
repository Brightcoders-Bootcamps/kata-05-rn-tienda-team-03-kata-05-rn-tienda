import React from 'react';
import {View,Text,ImageBackground,TouchableOpacity,StyleSheet, Image} from 'react-native';


const HomeScreen = ({navigation})=>
{
  return(
    <View style={styles.mainContainer}>     
      <ImageBackground style = {styles.Fondo} source={require('../Images/splashh.jpeg')}/>
      <View style={styles.Header}>
        <TouchableOpacity onPress={navigation.openDrawer()}>
          <Image style={styles.image} source={require('../Images/menu.png')}/>
        </TouchableOpacity>
        <Text style={styles.labelText}>Home</Text>
        <TouchableOpacity>
          <Image style={styles.image} source={require('../Images/carrito2.png')}/>
        </TouchableOpacity>                           
      </View>
      <View style={styles.Container}>                      
      </View>   
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:
  {                 
      width: '100%',
      height: '100%',
      backgroundColor: '#3cb3ab', 
  },
  Fondo:
  {
      width: '100%',
      height: '100%',
      position: 'absolute',
      resizeMode: 'cover',     
      opacity: 0.3,  
  },
  Header:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30
  },
  Container:
  {    
    width: '100%',
    height: '100%',       
    backgroundColor: 'white',
    justifyContent: 'center',
    borderTopEndRadius: 70,
    borderTopLeftRadius: 70,
    position: 'absolute',
    marginTop: '25%',

  },
  labelText:
  {
      fontSize:20,  
      color: 'white',
      fontWeight: 'bold',
      marginTop: 10,
      textAlign: 'center'
  },
 image:
 {
   width: 30,
   height: 30,
   marginTop: 8
 },
 imagee:
 {
   width: 45,
   height: 45,
 }
});

export default HomeScreen;
