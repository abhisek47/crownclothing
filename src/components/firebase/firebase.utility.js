import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC1RSjJud3iqfdfpRyro09rwSKJVWKwkGY",
    authDomain: "crown-db-32560.firebaseapp.com",
    databaseURL: "https://crown-db-32560.firebaseio.com",
    projectId: "crown-db-32560",
    storageBucket: "crown-db-32560.appspot.com",
    messagingSenderId: "755949801645",
    appId: "1:755949801645:web:8115e66fc68de9f0697624",
    measurementId: "G-1P6Z1RHGDW"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  console.log(snapShot)

  if(!snapShot.exists){
    const {displayName,email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error){
      console.log('error creating user', error.message );
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
