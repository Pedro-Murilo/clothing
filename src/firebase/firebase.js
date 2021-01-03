import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCP7clMWaaiLb3RnCtz488Yvsd6o6hJYOI",
  authDomain: "crwn-db-ba378.firebaseapp.com",
  projectId: "crwn-db-ba378",
  storageBucket: "crwn-db-ba378.appspot.com",
  messagingSenderId: "272580286328",
  appId: "1:272580286328:web:306ca215b0916aed741a8d",
  measurementId: "G-NGRT3E712Q",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
