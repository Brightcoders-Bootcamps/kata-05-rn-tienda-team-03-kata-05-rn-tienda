import React from 'react';
import {StyleSheet} from 'react-native';
//Nvigation Imports//
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Screens//
import SplashScreen from './Screens/SplashScreen'
import LogIn from './Screens/LogIn'
import SignUp from './Screens/SignUp'
import HomeScreen from './Screens/HomeScreen'
 


const Stack = createStackNavigator();

const App = ()=>
{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="SplashScreen" options={{headerShown: false}} component={SplashScreen}/>  
        <Stack.Screen  name="LogIn" options={{headerShown: false}} component={LogIn}/>         
        <Stack.Screen  name="SignUp" options={{headerShown: false}} component={SignUp}/>  
        <Stack.Screen  name="HomeScreen" options={{headerShown: false}} component={HomeScreen}/>  
      </Stack.Navigator>    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainerApp:
  {
    flex:1,      
  }
});

export default App;

