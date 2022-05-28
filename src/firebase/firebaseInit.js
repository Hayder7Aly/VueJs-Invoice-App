import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBLuDO3WMy5aPTUjP-CqQk1X6hAGmRAmVQ",
  authDomain: "invoice-app-fda30.firebaseapp.com",
  projectId: "invoice-app-fda30",
  storageBucket: "invoice-app-fda30.appspot.com",
  messagingSenderId: "893956130497",
  appId: "1:893956130497:web:549b887c49bb16cc37f640",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
firebase.analytics();