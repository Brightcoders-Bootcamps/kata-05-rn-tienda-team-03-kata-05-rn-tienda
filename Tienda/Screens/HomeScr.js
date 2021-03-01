import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import EmptyDesignOne from '../Components/EmptyDesignOne';
import styles from '../Components/Styling';
import Icon from 'react-native-ico';
//https://blog.jscrambler.com/how-to-use-react-native-asyncstorage/
import AsyncStorage from '@react-native-community/async-storage';
export default function HomeScr({navigation}) {
    
  const [carShopContain, setCarShopContain] = useState([]);
  const [carShopCount, setCarShopCount] = useState(0);
  
  const [detalle, setDetalle] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [countShop, setCountShop] = useState(1);
  const [totalDetShop, setTotalDetShop] = useState(0);
  const [firstOne, setFirstOne] = useState(true);
  const STORAGE_CAR = '@save_car';
  useEffect(()=> {
    console.log('useEffect');
    if(firstOne == true)
    {
      console.log('firstOne');
      readData();
      setFirstOne(false);
    }    
  },[carShopContain]);
  const readData = async () => {
    try {
      const userCar = await AsyncStorage.getItem(STORAGE_CAR);
      let jsonObj = {}
      if (userCar !== null) {
        jsonObj = JSON.parse(userCar);
        setCarShopContain(jsonObj);
        let lengthArr = jsonObj.length;
        setCarShopCount(lengthArr); 
      }
    } catch (e) {
      alert('Error. Getting the carshop :( !! .');
    }
  };
  
  const saveData = async (data) => {
    try {
      let dJson = JSON.stringify(data);
      await AsyncStorage.setItem(STORAGE_CAR, dJson);
    } catch (e) {
      alert('Error. Setting the carrshop :( !! .');
    }
  };
  const pushArticleToCarShop = () => {
    //aumentamos en 1 el contador del carrito
    let csc = carShopCount + 1;
    console.log(csc);
    setCarShopCount(csc);
    //armamos el artículo en un objeto con las variables de estado que tenemos
    let articleObj = {
        id: carShopCount,
        idArticle: detalle.id,
        nameProduct: detalle.nameProduct,
        image: detalle.image,
        price: detalle.price,
        medida: detalle.medida,
        count: countShop,
        total: totalDetShop,
      }; 
    //leemos el contenido del carro, añadimos el nuevo objeto y guardamos el estado
    let contain = carShopContain;
    contain.push(articleObj);
    //añadimos el articulo en el estado del carrito
    setCarShopContain(contain);
    //guardamos en el almacenamiento asincrono lo contenido en el carrito
    //console.log(carShopContain);
    saveData(carShopContain);
    closeDet();
  }
  const plusCount = () => {
    let csp = countShop;
    setCountShop(csp+1);
    setTotalDetShop(detalle.price * (csp+1));
  }
  const minusCount = () => {
    if (countShop > 1)
    {
      let csm = countShop;
      setCountShop(csm-1);
      setTotalDetShop(detalle.price * (csm-1));
    }
  }
  const closeDet = () => {
    setShowDetail(false);
    setCountShop(1);
  }
  const sShowDetail =(child) => {
    setDetalle(child);
    setShowDetail(true);
    setCountShop(1);
    setTotalDetShop(child.price * 1);
  }
  const group = (items, n) =>
    items.reduce((acc, x, i) => {
    const idx = Math.floor(i / n);
    acc[idx] = [...(acc[idx] || []), x];
    return acc;
    }, []);
    return (
      <>
        <EmptyDesignOne />
        <View style={styles.title}>
          <Text style={styles.labelTitle}>Home</Text>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image style={styles.imgMenu} source={require('../Images/menu.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <ScrollView>
            {group(DATA, 3).map((children) => (
              <View key={children[1].id+10} style={styles.group3}>
                {
                children.map((x, i) => (
                    <View key={x.id} style={styles.card}>
                    <Image style={styles.imgCard} source={{uri: x.image}} />
                    <Text style={styles.lblProduct}>{x.nameProduct}</Text>
                    <Text style={styles.lblProduct}>${x.price}</Text>
                    <TouchableOpacity style={styles.btnAdd} onPress={()=>(
                      sShowDetail(x)//setShowDetail(!showDetail)//console.log(x.nameProduct)//name=x.nameProduct                
                      )}>
                      <Text style={styles.lblProductButton}>Add to cart</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            ))}
          </ScrollView>
          {showDetail && (
                    <View style={styles.popDetail} >
                      <Image style={styles.detImage} source={{uri: detalle.image}} />
                      <View style={styles.detFoot}>
                        <View>
                          <Text style={styles.detText}>{detalle.nameProduct}</Text>
                          <Text style={styles.detText}>${detalle.price} {detalle.medida}</Text>
                        </View>
                        <View style={styles.controlCantidad}>
                          <TouchableOpacity onPress={minusCount}>
                            <Icon
                              name="minus-sign-of-horizontal-bar" group="universalicons"
                              height="14"
                              width="14"
                              color="#9caec0"
                            />
                          </TouchableOpacity>
                          <Text style={styles.detTextCantidad}>{countShop}</Text>
                          <TouchableOpacity onPress={plusCount}>
                            <Icon
                                name="plus-sign" group="universalicons"
                                height="14"
                                width="14"
                                color="#9caec0"
                              />
                          </TouchableOpacity>
                        </View>  
                      </View>                      
                      <Text style={styles.detTextTotal}>Total: $ {totalDetShop}</Text>
                      <View style={styles.CloseAdd}>
                        <TouchableOpacity onPress={closeDet}>
                          <Icon style={styles.detTextClose}
                                  name="close-button" group="material-design"
                                  height="15"
                                  width="15"
                                  color="#c0d0df"
                                />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={pushArticleToCarShop}>
                          <Icon style={styles.detTextShop}
                                  name="shopping-cart" group="logistics-delivery" 
                                  height="30"
                                  width="30"
                                  color="#3cb3ab"
                                />
                        </TouchableOpacity>
                      </View>
                    </View>
          )
          }
        </View>
      </>
    );
  }
const DATA = [
  {
    id: '1',
    nameProduct: 'Potato',
    image: 'https://stoller.com.au/wp-content/uploads/2019/03/potato_crop.jpg',
    price: 25,
    medida: 'kg',
  },
  {
    id: '2',
    nameProduct: 'Broccoli',
    image: 'https://nutrifoodelsalvador.com/wp-content/uploads/2020/06/broccoli.png',
    price: 10,
    medida: 'kg',
  },
  {
    id: '3',
    nameProduct: 'Letuse',
    image: 'https://cdn.britannica.com/77/170677-050-F7333D51/lettuce.jpg',
    price: 25,
    medida: 'kg',
  },
  {
    id: '4',
    nameProduct: 'Cabbage',
    image: 'https://www.freshpoint.com/wp-content/uploads/2020/02/Freshpoint-green-cabbage.jpg',
    price: 10,
    medida: 'kg',
  },
  {
    id: '5',
    nameProduct: 'Cucumber',
    image: 'https://cdn-b.medlife.com/2019/04/cucumber-health-benefits.png',
    price: 15,
    medida: 'kg',
  },
  {
    id: '6',
    nameProduct: 'Tomato',
    image: 'https://st2.depositphotos.com/1020804/5369/i/600/depositphotos_53695819-stock-photo-hole-tomato-and-half-with.jpg',
    price: 15,
    medida: 'kg',
  },
  {
    id: '7',
    nameProduct: 'Orange',
    image: 'https://sites.psu.edu/lifeitmoveson/files/2017/10/orange-1hoca2l.jpg',
    price: 10,
    medida: 'kg',
  },
  {
    id: '8',
    nameProduct: 'Apple',
    image: 'https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg',
    price: 15,
    medida: 'kg',
  },
  {
    id: '9',
    nameProduct: 'Grapes',
    image: 'https://www.aicr.org/wp-content/uploads/2020/01/shutterstock_533487490-640x462.jpg',
    price: 20,
    medida: 'kg',
  },
  {
    id: '10',
    nameProduct: 'Guava',
    image: 'https://static4.depositphotos.com/1005818/389/i/950/depositphotos_3898361-stock-photo-guava.jpg',
    price: 25,
    medida: 'kg',
  },
  {
    id: '11',
    nameProduct: 'Banana',
    image: 'https://www.frutiban.com/wp-content/uploads/2017/12/banana.jpg',
    price: 10,
    medida: 'kg',
  },
  {
    id: '12',
    nameProduct: 'Pmegranate',
    image: 'https://andhragreens.com/data/p_images/1602224883111.jpeg',
    price: 25,
    medida: 'kg',
  },
  {
    id: '13',
    nameProduct: 'Carnaroli',
    image: 'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/24170732/ING-carnaroli-rice-thumb1x1.jpg',
    price: 25,
    medida: 'kg',
  },
  {
    id: '14',
    nameProduct: 'Chuno',
    image: 'https://cdn.shopify.com/s/files/1/0268/6445/1697/products/chuno-blanco_1000x.png',
    price: 10,
    medida: 'kg',
  },
  {
    id: '15',
    nameProduct: 'Goji',
    image: 'https://cdn.shopify.com/s/files/1/0711/3293/products/goji_d7d7fe3d-396b-46c4-8152-8e29447e41ea_600x.jpg',
    price: 25,
    medida: 'kg',
  },
];