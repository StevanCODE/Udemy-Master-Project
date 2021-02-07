import firebase from "firebase/app"

import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyC6CuQyq8NwgZXrp3zf5q8HiGesqOcjlwY",
    authDomain: "udemy-project-5cd18.firebaseapp.com",
    projectId: "udemy-project-5cd18",
    storageBucket: "udemy-project-5cd18.appspot.com",
    messagingSenderId: "130695143890",
    appId: "1:130695143890:web:3f00c45dbdabd9bdaf680b"
  }


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

  firebase.initializeApp(config)


  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt : "select_account"})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase