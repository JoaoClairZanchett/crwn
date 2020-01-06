import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAJ1xAes2cGCSeBlFB8_f92GrZN3RrYcdg",
  authDomain: "crwn-db-9cede.firebaseapp.com",
  databaseURL: "https://crwn-db-9cede.firebaseio.com",
  projectId: "crwn-db-9cede",
  storageBucket: "crwn-db-9cede.appspot.com",
  messagingSenderId: "681602879868",
  appId: "1:681602879868:web:cb03ca04311c98457094f9",
  measurementId: "G-2KTXM9CW0G"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
