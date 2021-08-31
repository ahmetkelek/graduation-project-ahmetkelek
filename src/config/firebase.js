import firebase from "./firebase";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtg1FDKrP0CYmdg9-A2bGVpLOjD36IqXg",
  authDomain: "ticketsystem-c3d40.firebaseapp.com",
  databaseURL: "https://ticketsystem-c3d40-default-rtdb.firebaseio.com",
  projectId: "ticketsystem-c3d40",
  storageBucket: "ticketsystem-c3d40.appspot.com",
  messagingSenderId: "502436402619",
  appId: "1:502436402619:web:23318e5619da8fa92fa09e",
  measurementId: "G-P3WJH9T9KZ"
};


firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export  {storage,firebase as default}
