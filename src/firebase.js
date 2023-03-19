import firebase from "./firebase";

// following lines are copied from firebase config in project settings
const firebaseConfig = {
  apiKey: "AIzaSyBDwNO4Cp8YGcBAIPE1ZlM2Q0ihoVlq-pw",
  authDomain: "whatsapp-clone-2143e.firebaseapp.com",
  projectId: "whatsapp-clone-2143e",
  storageBucket: "whatsapp-clone-2143e.appspot.com",
  messagingSenderId: "455749384030",
  appId: "1:455749384030:web:4647bfcc1562c67a9a01cf"
};

// this special line of code connects everything
const firebaseApp = firebase.initializeApp(firebaseConfig);

// this is for database connection
const db = firebase.firestore();

export default db;