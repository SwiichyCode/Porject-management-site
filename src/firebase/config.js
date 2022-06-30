import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQTVKfsCl2MUTSClrn5syJ40ptOYuliH4",
  authDomain: "thedojosite-51952.firebaseapp.com",
  projectId: "thedojosite-51952",
  storageBucket: "thedojosite-51952.appspot.com",
  messagingSenderId: "1019066111227",
  appId: "1:1019066111227:web:388ce5d9b39ec0a8c38c5e",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
