import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  // apiKey: REACT_APP_API_KEY,
  // authDomain: REACT_APP_AUTH_DOMAIN,
  // projectId: REACT_APP_PROJECT_ID,
  // storageBucket: REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  // appId: REACT_APP_APP_ID,
  // measurementId: REACT_APP_MEASURMENT_ID,
  apiKey: "AIzaSyCG3Y-cvJikGkAfzMKVD7oFmCV7kEHx7hM",
  authDomain: "track-your-transactions.firebaseapp.com",
  projectId: "track-your-transactions",
  storageBucket: "track-your-transactions.appspot.com",
  messagingSenderId: "496344508998",
  appId: "1:496344508998:web:cf09acba743eb6b0337847",
  measurementId: "G-J5NSDQL8QB",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
const db = getFirestore(app);
export default db;
