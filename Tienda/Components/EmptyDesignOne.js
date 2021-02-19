import React from 'react';
import {View,ImageBackground,TouchableOpacity,StyleSheet, Image} from 'react-native';

export default function EmptyDesignOne({navigation}) {
  return (
    <View style={styles.maincontainer}>
      <ImageBackground style = {styles.fondo} source={require('../Images/splashh.jpeg')}/>
      <View style={styles.Header}>
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
  maincontainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#3cb3ab',
  },
  fondo:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',     
    opacity: 0.3, 
    position: 'absolute',
  },
  Header:{
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    padding: 30
  },
  image:
  {
    width: 30,
    height: 30,
    marginTop: 8
  },
  labelText:
  {
      fontSize:20,  
      color: 'white',
      fontWeight: 'bold',
      marginTop: 10,
      textAlign: 'center'
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
});
