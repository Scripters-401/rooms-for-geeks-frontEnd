import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "scripters401.firebaseapp.com",
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: "scripters401",
  storageBucket: "scripters401.appspot.com",
  messagingSenderId: "986956607072",
  appId: "1:986956607072:web:f50a38cda46fb9293c5d05"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };