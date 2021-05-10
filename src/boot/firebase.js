import firebase from "firebase/app";

import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "your-key",
  authDomain: "your-key",
  projectId: "your-key",
  storageBucket: "your-key",
  messagingSenderId: "your-key",
  appId: "your-key",
  measurementId: "your-key"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;
