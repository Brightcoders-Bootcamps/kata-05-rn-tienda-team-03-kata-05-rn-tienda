import React from 'react';
import {View,Text,ImageBackground,TouchableOpacity,StyleSheet, Image, TextInput} from 'react-native';


const HomeScreen = ({navigation})=>
{
  return(
    <View style={styles.mainContainer}>
      
      <View>
          <ImageBackground style = {styles.Fondo} source={require('../Images/splashh.jpeg')}/>
      </View>

      <View style={styles.Header}>
        <TouchableOpacity>
          <Image style={styles.image} source={require('../Images/menu.png')}/>
        </TouchableOpacity>
      
        <Text style={styles.labelText}>Home</Text>
        
        <TouchableOpacity>
          <Image style={styles.image} source={require('../Images/carrito2.png')}/>
        </TouchableOpacity>                           
      </View>
        
          
      <View style={styles.Container}>      
        <View style={styles.Menu}>
          <TouchableOpacity>
            <Image style={styles.image} source={require('../Images/tienda2.png')}/>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.image} source={require('../Images/menu2.png')}/>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.imagee} source={require('../Images/add.png')}/>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.image} source={require('../Images/carrito1.png')}/>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.image} source={require('../Images/bell.png')}/>  
          </TouchableOpacity>                                                                              
        </View>                 
      </View>
           
       
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:
  {                
      flex:1,    
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
  Header:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30
  },
  Container:
  {    
    width: 360,
    height: 520,       
    backgroundColor: 'white',
    justifyContent: 'center',
    borderTopEndRadius: 70,
    borderTopLeftRadius: 70,
    position: 'absolute',
    marginTop: 100,
  },
  labelText:
  {
      fontSize:20,  
      color: 'white',
      fontWeight: 'bold',
      marginTop: 10,
      textAlign: 'center'
  },
  Menu:
  {  
    padding: 20,    
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 430,
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


/*
  */