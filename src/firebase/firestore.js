// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzif0k6HdfohgXuCh4IIsTbzs6AHlmtxM",
  authDomain: "amazing-store-987fb.firebaseapp.com",
  projectId: "amazing-store-987fb",
  storageBucket: "amazing-store-987fb.appspot.com",
  messagingSenderId: "741321576047",
  appId: "1:741321576047:web:4a0fff1de0ea53b717c79a",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export { app, db };
