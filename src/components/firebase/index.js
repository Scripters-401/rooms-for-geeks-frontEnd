import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCEoNFsbGibVXd5fEwrYGSKvtJxmv3ft0s",
  authDomain: "scripters401.firebaseapp.com",
  databaseURL: "https://scripters401.firebaseio.com",
  projectId: "scripters401",
  storageBucket: "scripters401.appspot.com",
  messagingSenderId: "986956607072",
  appId: "1:986956607072:web:f50a38cda46fb9293c5d05"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };