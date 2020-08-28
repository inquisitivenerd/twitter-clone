import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDTgcY-whlDgug07h_2sztZyNrL5_LCRbU",
    authDomain: "twitter-clone-1bc59.firebaseapp.com",
    databaseURL: "https://twitter-clone-1bc59.firebaseio.com",
    projectId: "twitter-clone-1bc59",
    storageBucket: "twitter-clone-1bc59.appspot.com",
    messagingSenderId: "298856185130",
    appId: "1:298856185130:web:0a8ef06f910bdacc3bf253",
    measurementId: "G-40WNJSMJGE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;