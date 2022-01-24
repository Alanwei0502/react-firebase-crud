import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

// [Got error console!!]
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyC02Kbrl5JXTPcYZ58bGGajXnn5ghUqYb8",
  authDomain: "react-firebase-crud-2d251.firebaseapp.com",
  projectId: "react-firebase-crud-2d251",
  storageBucket: "react-firebase-crud-2d251.appspot.com",
  messagingSenderId: "1074975770744",
  appId: "1:1074975770744:web:3e87f997d66748a51c058d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

