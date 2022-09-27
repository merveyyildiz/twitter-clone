import { initializeApp } from "firebase/app";
import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD6LA8o6qm9jtDwBptqqG8pmNgV4Qbkl40",
  authDomain: "twitter-clone-185e3.firebaseapp.com",
  projectId: "twitter-clone-185e3",
  storageBucket: "twitter-clone-185e3.appspot.com",
  messagingSenderId: "182341267649",
  appId: "1:182341267649:web:d1d73478fc64e6df7ca440"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;