import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCUBAH3SOCAvM38HZfWdMi3oyq74QhzSno',
  authDomain: 'realmadridshop-d6168.firebaseapp.com',
  databaseURL: 'https://realmadridshop-d6168-default-rtdb.firebaseio.com',
  projectId: 'realmadridshop-d6168',
  storageBucket: 'realmadridshop-d6168.appspot.com',
  messagingSenderId: '192493284904',
  appId: '1:192493284904:web:7829d8685ac05f4b350f1d',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
