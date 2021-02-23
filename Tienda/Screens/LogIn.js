import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase from '../src/utils/firebase';
import 'firebase/auth';

export default function LogIn(props) {
  const navigation = useNavigation();
  const [formData, setFormData] = useState(defaultValue());
  const [formError, setFormError] = useState({});
  const log = () => {
    let errors = {};
    if (!formData.email || !formData.password) {
      if (!formData.email) {
        errors.email = true;
      }
      if (!formData.password) {
        errors.password = true;
      }
    } else if (formData.password.length < 8) {
      errors.password = true;
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          console.log('OK');
          navigation.navigate('home');
        })
        .catch(() => {
          setFormError({
            email: true,
            password: true,
          });
        });
    }
    setFormError(errors);
  };
  function defaultValue() {
    return {
      email: '',
      password: '',
    };
  }
  const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text});
  };
  return (
    <>
      <View style={styles.mainContainer}>
        <ImageBackground
          style={styles.Fondo}
          source={require('../Images/splashh.jpeg')}
        />
        <View style={styles.loginContainer}>
          <Text style={styles.labelText}>Sign In</Text>
          <View style={[styles.input, styles.shadow]}>
            <Image
              style={styles.icoMail}
              source={require('../Images/icoMail.png')}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor={'#b3c6d7'}
              onChange={(e) => onChange(e, 'email')}
            />
          </View>
          <View style={[styles.input, styles.shadow]}>
            <Image
              style={styles.icoPass}
              source={require('../Images/icoPass.png')}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={'#b3c6d7'}
              onChange={(p) => onChange(p, 'password')}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.labelSignUp}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={log}>
            <Image
              style={styles.flecha}
              source={require('../Images/flecha.png')}
            />
            <Text style={styles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <Text style={styles.lebel}>CREATE ACOUNT</Text>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    marginTop: Dimensions.get('window').height - 150,
  },
  lebel: {
    marginTop: 50,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  input: {
    color: '#8d9dac',
    backgroundColor: 'white',
    paddingLeft: 20,
    flexDirection: 'row',
  },
  icoMail: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft: 5,
    alignSelf: 'center',
  },
  icoPass: {
    width: 25,
    height: 28,
    marginRight: 7,
    alignSelf: 'center',
  },
  shadow: {
    borderBottomWidth: 30,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderColor: '#f9faff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#3cb3ab',
  },
  Fondo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.3,
  },
  loginContainer: {
    height: '85%',
    width: '100%',
    paddingTop: '30%',
    paddingLeft: '10%',
    paddingRight: '10%',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  labelText: {
    fontSize: 20,
    color: '#8d9dac',
    fontWeight: 'bold',
    marginBottom: 100,
    textAlign: 'center',
  },
  labelSignUp: {
    color: '#8d9dac',
    marginTop: 5,
    textAlign: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#55B6B1',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 100,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  flecha: {
    width: 15,
    height: 15,
    marginTop: 8,
    marginRight: 5,
  },
});
