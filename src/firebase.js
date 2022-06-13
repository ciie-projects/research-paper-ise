
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getAuth} from "firebase/auth";
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCgng8Mro82d7gvy55KYxzfGemwKlF1l8w",
  authDomain: "ise-research-paper.firebaseapp.com",
  projectId: "ise-research-paper",
  storageBucket: "ise-research-paper.appspot.com",
  messagingSenderId: "335479031996",
  appId: "1:335479031996:web:380cfbbe13bc0d781428b9",
  measurementId: "G-QVEEPMV820"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// export const auth=getAuth(app);
export {firebase,app};
// const analytics = getAnalytics(app);
