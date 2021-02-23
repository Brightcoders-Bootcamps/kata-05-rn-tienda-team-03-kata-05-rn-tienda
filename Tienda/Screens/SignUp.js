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
import firebase from '../src/utils/firebase';

export default function SignUp({navigation}) {
  const [formData, setFormData] = useState(defaultValue());
  const [formError, setFormError] = useState({});
  function ValidationOK() {
    let errors = {};
    console.log(formData.email);
    console.log(formData.password);
    if (!formData.email || !formData.password) {
      if (!formData.email) {
        errors.email = true;
      }
      if (!formData.password) {
        errors.password = true;
      }
      setFormError(errors);
      return false;
    } else if (formData.password.length < 8) {
      errors.password = true;
      setFormError(errors);
      return false;
    } else if (!validateEmail(formData.email)) {
      errors.email = true;
      setFormError(errors);
      return false;
    } else {
      return true;
    }
  }
  const register = () => {
    let validado = ValidationOK();
    console.log(validado);
    if (validado) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
          const mail = formData.email;
          navigation.navigate('home', {pEmail: mail});
        })
        .catch((e) => {
          if (e.code == 'auth/email-already-in-use') {
            setFormError({...formError, exist: true});
          }
        });
    }
  };
  const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text});
    if (type == 'email') {
      setFormError({...formError, email: false});
      setFormError({...formError, exist: false});
    } else if (type == 'password') {
      setFormError({...formError, password: false});
    }
  };
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  function defaultValue() {
    return {
      email: '',
      password: '',
    };
  }
  return (
    <>
      <View style={styles.mainContainer}>
        <ImageBackground
          style={styles.Fondo}
          source={require('../Images/splashh.jpeg')}
        />
        <View style={styles.loginContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LogIn');
            }}>
            <Image
              style={styles.cancelar}
              source={require('../Images/cancelar.png')}
            />
          </TouchableOpacity>
          <Text style={styles.labelText}>Create Acount</Text>
          <View style={[styles.input, styles.shadow]}>
            <Image
              style={styles.icoMail}
              source={require('../Images/icoUser.png')}
            />
            <TextInput
              placeholder="Full Name"
              placeholderTextColor={'#b3c6d7'}
            />
          </View>
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
              onChange={(e) => onChange(e, 'password')}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.labelSignUp}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={register}>
            <Image
              style={styles.flecha}
              source={require('../Images/flecha.png')}
            />
            <Text style={styles.buttonText}>CREATE ACOUNT</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigation.navigate('LogIn');
        }}>
        <Text style={styles.lebel}>SIGN IN</Text>
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
    paddingTop: '10%',
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
    marginTop: 60,
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
  cancelar: {
    width: 15,
    height: 15,
    marginLeft: 280,
    marginBottom: 50,
  },
});
