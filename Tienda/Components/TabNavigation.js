import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import CarShop from '../Screens/CarShop';
import Empty from '../Screens/Empty';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-ico';

const Drawer = createDrawerNavigator();
function MainDrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen">
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="CarShop" component={CarShop} />
    </Drawer.Navigator>
  );
}

//<<Combinando Drawer con Tab>>
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <>
      <Tab.Navigator
          tabBarOptions={{
            showLabel: false,
            activeTintColor: '#3cb3ab',
            inactiveTintColor: '#748a9d',
          }}     
      >
        <Tab.Screen  name="MainDrawer" component={MainDrawerNavigation} 
          options={{
              tabBarIcon: ({color}) => (<Icon name="shop" height="30" width="30" group="shopping" color={color}/>),
              }}  
        />
        <Tab.Screen name="op2" component={Empty}
          options={{
              tabBarIcon: ({color}) => (<Icon name="windows-2" group="essential"  height="30" width="30" color={color}/>),
              }}  
        />
        <Tab.Screen name="add" component={Empty}
          options={{
              tabBarIcon: ({color}) => (<Icon name="add-button-inside-black-circle" group="material-design" height="45" width="45" color={color}/>),
              }} 
        />
        <Tab.Screen name="op4" component={Empty}
          options={{
              tabBarIcon: ({color}) => (<Icon name="shopping-cart-1" group="basic" height="30" width="30" color={color}/>),
              }} 
        />
        <Tab.Screen name="carshop" component={CarShop} 
          options={{
              tabBarIcon: ({color}) => (<Icon name="musical-bell-outline" group="font-awesome" height="30" width="30" color={color}/>),
              }} 
        />
      </Tab.Navigator>
    </>
  );
}
