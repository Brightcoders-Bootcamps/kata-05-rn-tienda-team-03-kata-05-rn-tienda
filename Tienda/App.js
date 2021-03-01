import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  useWindowDimensions,
  LogBox,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ico';
import 'firebase/auth';
import 'firebase/firestore';
//screens
import SplashScreen from './Screens/SplashScreen';
import LogIn from './Screens/LogIn';
import SignUp from './Screens/SignUp';
import HomeScr from './Screens/HomeScr';
import CarShop from './Screens/CarShop';
import Empty from './Screens/Empty';
import styles from "./Components/Styling";
import EmptyDesignOne from './Components/EmptyDesignOne';
const Tab = createBottomTabNavigator();

function HomeTab({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({})}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#3cb3ab',
        inactiveTintColor: '#748a9d',
      }}>
      <Tab.Screen
        name="tabhome"
        component={HomeScr}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="shop"
              height="30"
              width="30"
              group="shopping"
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="tabCatalog"
        component={Empty}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="windows-2"
              group="essential"
              height="30"
              width="30"
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="tabAdd"
        component={Empty}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="add-button-inside-black-circle"
              group="material-design"
              height="45"
              width="45"
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="tabcarshop"
        component={CarShop}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="shopping-cart-1"
              group="basic"
              height="30"
              width="30"
              color={color}
            />
          ),
        }}
        nom="CARSHOP"
      />
      <Tab.Screen
        name="tabNotifications"
        component={Empty}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="musical-bell-outline"
              group="font-awesome"
              height="30"
              width="30"
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();
export default function App() {
  const dimensions = useWindowDimensions();
  LogBox.ignoreLogs(['Setting a timer']);
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="SplashScreen"
        drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
        drawerContentOptions={{
          activeTintColor: '#ffffff',
          inactiveTintColor: '#ffffff',
        }}
        drawerContent={(props) => {
          return (
            <>
              <View style={styles.drawHeader}>
                <Text style={styles.lblVegetabely}>Vegetablely</Text>
                <Image source={require('./Images/LogoTienda.png')} />
              </View>
              <View style={styles.menuContainer}>
                <TouchableOpacity
                  onPress={() => props.navigation.closeDrawer()}>
                  <Image
                    style={styles.image}
                    source={require('./Images/menu.png')}
                  />
                </TouchableOpacity>
              </View>
              <DrawerContentScrollView style={styles.draw} {...props}>
                <DrawerItem
                  label="Home"
                  inactiveTintColor="#ffffff"
                  icon={({color}) => (
                    <Icon
                      name="home-button"
                      group="material-design"
                      height="16"
                      width="16"
                      color={color}
                    />
                  )}
                  onPress={() => props.navigation.navigate('tabhome')}
                />
                <DrawerItem
                  label="My Order"
                  inactiveTintColor="#ffffff"
                  icon={({color}) => (
                    <Icon
                      name="shopping-cart"
                      group="material-design"
                      height="16"
                      width="16"
                      color={color}
                    />
                  )}
                  onPress={() => props.navigation.navigate('tabcarshop')}                  
                />
                <DrawerItem
                  label="Offers"
                  inactiveTintColor="#ffffff"
                  icon={({color}) => (
                    <Icon
                      name="tag-black-shape"
                      group="font-awesome"
                      height="16"
                      width="16"
                      color={color}
                    />
                  )}
                />
                <DrawerItem
                  label="Notifications"
                  inactiveTintColor="#ffffff"
                  icon={({color}) => (
                    <Icon
                      name="bell-musical-tool"
                      group="font-awesome"
                      height="16"
                      width="16"
                      color={color}
                    />
                  )}
                />
                <DrawerItem
                  label="Our Brances"
                  inactiveTintColor="#ffffff"
                  icon={({color}) => (
                    <Icon
                      name="shopping-zone-marker"
                      group="lodgicons"
                      height="16"
                      width="16"
                      color={color}
                    />
                  )}
                />
                <DrawerItem
                  label="Contact Us"
                  inactiveTintColor="#ffffff"
                  icon={({color}) => (
                    <Icon
                      name="phone-call-button"
                      group="material-design"
                      height="16"
                      width="16"
                      color={color}
                    />
                  )}
                />
                <DrawerItem
                  label="Feedback"
                  inactiveTintColor="#ffffff"
                  icon={({color}) => (
                    <Icon
                      name="message-black-speech-bubble-of-rectangular-shape"
                      group="coolicons"
                      height="16"
                      width="16"
                      color={color}
                    />
                  )}
                />
                <DrawerItem
                  label="LogOut"
                  inactiveTintColor="#ffffff"
                  icon={({color}) => (
                    <Icon
                      name="log-out"
                      group="basic"
                      height="16"
                      width="16"
                      color={color}
                    />
                  )}
                  onPress={() => props.navigation.navigate('LogIn')}
                />
              </DrawerContentScrollView>
            </>
          );
        }}>
        <Drawer.Screen name="home" component={HomeTab} />
        <Drawer.Screen name="SplashScreen" component={SplashScreen} />
        <Drawer.Screen name="LogIn" component={LogIn} />
        <Drawer.Screen name="SignUp" component={SignUp} />
        <Drawer.Screen name="EmptyDesignOne" component={EmptyDesignOne} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

