import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, useWindowDimensions} from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ico';
//screens
import SplashScreen from './Screens/SplashScreen'
import LogIn from './Screens/LogIn';
import SignUp from './Screens/SignUp';
import EmptyDesignOne from './Components/EmptyDesignOne';

const Tab = createBottomTabNavigator();
function HomeTab({navigation}) {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#3cb3ab',
        inactiveTintColor: '#748a9d',
      }}  
    >
        <Tab.Screen name="tabhome" component={HomeScreen} 
          options={{
          tabBarIcon: ({color}) => (<Icon name="shop" height="30" width="30" group="shopping" color={color}/>),
          }}
        />
        <Tab.Screen name="tabCatalog" component={Empty} 
           options={{
            tabBarIcon: ({color}) => (<Icon name="windows-2" group="essential"  height="30" width="30" color={color}/>),
            }}   
        />
        <Tab.Screen name="tabAdd" component={Empty} 
          options={{
            tabBarIcon: ({color}) => (<Icon name="add-button-inside-black-circle" group="material-design" height="45" width="45" color={color}/>),
            }}  
        />
        <Tab.Screen name="tabcarshop" component={CarShop} 
          options={{
            tabBarIcon: ({color}) => (<Icon name="shopping-cart-1" group="basic" height="30" width="30" color={color}/>),
            }}
          nom='CARSHOP' 
        />
        <Tab.Screen name="tabNotifications" component={Empty} 
          options={{
            tabBarIcon: ({color}) => (<Icon name="musical-bell-outline" group="font-awesome" height="30" width="30" color={color}/>),
            }}  
        />
    </Tab.Navigator>
  );
}
function HomeScreen({navigation}) {
  return (
    <>
      <EmptyDesignOne />
      <View style={styles.title}><Text style={styles.labelTitle}>Home</Text></View>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image style={styles.imgMenu} source={require('./Images/menu.png')}/>
        </TouchableOpacity>  
      </View>
    </>
  );
}
function CarShop({navigation}) {
  return (
    <>
      <EmptyDesignOne />
      <View style={styles.title}><Text style={styles.labelTitle}>CarShop</Text></View>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image style={styles.imgMenu} source={require('./Images/menu.png')}/>
        </TouchableOpacity>  
      </View>
    </>
  );
}
function Empty({navigation}){
  return (
    <>
      <EmptyDesignOne />
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image style={styles.imgMenu} source={require('./Images/menu.png')}/>
        </TouchableOpacity>  
      </View>
    </>
  );
}
const Drawer = createDrawerNavigator();
export default function App() {
  const dimensions = useWindowDimensions();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="SplashScreen" drawerType={dimensions.width >= 768 ? 'permanent' : 'front'} drawerContentOptions={{
        activeTintColor: '#ffffff',
        inactiveTintColor: '#ffffff',
      }} 
      drawerContent={props => {
        return (
          <>
            <View style={styles.drawHeader}>
              <Text style={styles.lblVegetabely} >Vegetablely</Text>
              <Image source={require('./Images/LogoTienda.png')} />
            </View>
            <View style={styles.menuContainer}>            
              <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                <Image style={styles.image} source={require('./Images/menu.png')}/>
              </TouchableOpacity>
            </View>
            <DrawerContentScrollView style={styles.draw} {...props}>
              <DrawerItem label="Home" inactiveTintColor='#ffffff' icon={({color}) => (<Icon name="home-button" group="material-design" height="16" width="16" color={color}/>)} onPress={() => props.navigation.navigate("tabhome")} />
              <DrawerItem label="My Order" inactiveTintColor='#ffffff' icon={({color}) => (<Icon name="shopping-cart" group="material-design" height="16" width="16" color={color}/>)} />
              <DrawerItem label="Offers" inactiveTintColor='#ffffff'icon={({color}) => (<Icon name="tag-black-shape" group="font-awesome" height="16" width="16" color={color}/>)} />
              <DrawerItem label="Notifications" inactiveTintColor='#ffffff'icon={({color}) => (<Icon name="bell-musical-tool" group="font-awesome" height="16" width="16" color={color}/>)} />
              <DrawerItem label="Our Brances" inactiveTintColor='#ffffff' icon={({color}) => (<Icon name="shopping-zone-marker" group="lodgicons" height="16" width="16" color={color}/>)} />
              <DrawerItem label="Contact Us" inactiveTintColor='#ffffff' icon={({color}) => (<Icon name="phone-call-button" group="material-design" height="16" width="16" color={color}/>)} />
              <DrawerItem label="Feedback" inactiveTintColor='#ffffff' icon={({color}) => (<Icon name="message-black-speech-bubble-of-rectangular-shape" group="coolicons" height="16" width="16" color={color}/>)} />
              <DrawerItem label="LogOut" inactiveTintColor='#ffffff' icon={({color}) => (<Icon name="log-out" group="basic" height="16" width="16" color={color}/>)} onPress={() => props.navigation.navigate("LogIn")} />
            </DrawerContentScrollView>
          </>
        )
      }} >
        <Drawer.Screen name="home" component={HomeTab} />         
        <Drawer.Screen name="SplashScreen" component={SplashScreen} />
        <Drawer.Screen name="LogIn" component={LogIn} />
        <Drawer.Screen name="SignUp" component={SignUp} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: '#3cb3ab',
    paddingLeft: 30,
  },
  image:
  {
    width: 20,
    height: 20,
    marginTop: 8,
  },
  lblVegetabely: {
    fontFamily: 'Courgette',
        fontSize: 25,
        color: 'white',
        marginBottom: 20,
  },
  drawHeader: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#3cb3ab',
  },
  draw:{
    backgroundColor: '#3cb3ab',
    paddingLeft: 15,
  },
  menu:{
    position: 'absolute',
    marginTop: 35,
    marginLeft: 20,
  },
  imgMenu: {
    width: 30,
    height: 30,
  },
  title: {
    position: 'absolute',
    marginTop: 40,
    alignSelf: 'center',
  },
  labelTitle: {
    fontFamily: 'Courgette',
    fontSize: 25,
    color: 'white',
  },
});
