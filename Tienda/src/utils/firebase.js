import firebase from 'firebase/app';
//import Config from 'react-native-config';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const API = Config.API_FIREBASE;
const API = 'AIzaSyBjAk45L0CO5gDVgQ5RLktOK-ic2DC2rP0';
const firebaseConfig = {
  apiKey: API,
  authDomain: 'shop-6c4a0.firebaseapp.com',
  projectId: 'shop-6c4a0',
  storageBucket: 'shop-6c4a0.appspot.com',
  messagingSenderId: '283840653522',
  appId: '1:283840653522:web:fec28d73bb9e4a3a36250b',
};

export default firebase.initializeApp(firebaseConfig);
