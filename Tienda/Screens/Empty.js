import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import styles from '../Components/Styling';
import EmptyDesignOne from '../Components/EmptyDesignOne';

export default function Empty({navigation}) {
    return (
      <>
        <EmptyDesignOne />
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image style={styles.imgMenu} source={require('../Images/menu.png')} />
          </TouchableOpacity>
        </View>
      </>
    );
  }