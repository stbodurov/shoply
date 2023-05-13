import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

var app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });

export const handleUserProfile = async ({ userAuth, additionalData }) => {
  if (!userAuth) return;
  const { uid } = userAuth;

  const userRef = firestore.doc(`users/${uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const timestamp = new Date();
    const userRoles = ['standard', 'admin'];
    const cart = [];
    try {
      await userRef.set({
        displayName,
        email,
        createdDate: timestamp,
        userRoles,
        ...additionalData
      });
    } catch(err) {
      // console.log(err);
    }
  }

  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  })
}

export const uploadImage = () => {
  const ref = getStorage().ref();
  const file = document.querySelector('.productImg').files[0];
  const name = file.name;
  
  const metadata = {
    contentType:file.type
  }

  const task = ref.child(name).put(file, metadata);

  task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then(url => {
    console.log(url);
    return url;
  });
}