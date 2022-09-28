import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyALIAw0H1dJPBBAXAHJmq0Q8RLjKAuoOBE",
  authDomain: "restaurantapp-68e6e.firebaseapp.com",
  databaseURL: "https://restaurantapp-68e6e-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-68e6e",
  storageBucket: "restaurantapp-68e6e.appspot.com",
  messagingSenderId: "83877972023",
  appId: "1:83877972023:web:fdfd8913438f1d32f6d7b2"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };