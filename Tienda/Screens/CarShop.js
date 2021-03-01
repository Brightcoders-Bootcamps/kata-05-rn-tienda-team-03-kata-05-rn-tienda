import React, {useState, useEffect}  from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import EmptyDesignOne from '../Components/EmptyDesignOne';
import styles from "../Components/Styling";
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-ico';

export default function CarShop({navigation}) {
  const STORAGE_CAR = '@save_car';
  const [carShopContain, setCarShopContain] = useState([]);
  useEffect(()=> {   
     readData();
   },);
  const readData = async () => {
    try {
      const userCar = await AsyncStorage.getItem(STORAGE_CAR);
      if (userCar !== null) {
        let jsonObj = JSON.parse(userCar);
        setCarShopContain(jsonObj);
      }
    } catch (e) {
      alert('Error. Getting the carshop :( !! .');
    }
  };
  /*
  const clearStorage = async () => {
    try {
      let dJson = '';
      await AsyncStorage.setItem(STORAGE_CAR, dJson);
      setCarShopContain([]);
    } catch (e) {
      alert('Error. Setting the carrshop :( !! .');
    }
  };
  */
    return (
      <>
        <EmptyDesignOne />
        <View style={styles.title}>
          <Text style={styles.labelTitle}>CarShop</Text>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image style={styles.imgMenu} source={require('../Images/menu.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.contenidoCarro}>
          <ScrollView>
              {carShopContain.map((x) => (
                <View key={x.id} style={styles.article}>
                  <View>
                    <Image style={styles.csImage} source={{uri: x.image}} />
                  </View>
                  <View style={styles.csData}>
                    <Text style={styles.csNameProduct}>{x.nameProduct}</Text>
                    <Text style={styles.csDet}>{x.count} {x.medida}</Text>
                    <Text style={styles.csDet}>$ {x.total}</Text>
                  </View>                           
                  <View style={styles.csRecycle}>
                    <TouchableOpacity>
                      <Icon style={styles.detTextClose}
                        name="recycle-bin" group="coolicons"
                        height="25"
                        width="25"
                        color="#c0d0df"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
          </ScrollView>
            <TouchableOpacity style={styles.btnOrderNow}>
              <View>
                <Text style={styles.txtBtnOrderNow}>Order now!</Text>
              </View>              
            </TouchableOpacity>
        </View>
      </>
    );
  }