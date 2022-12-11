import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore/lite';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe_i7xF1ObCVA3jaAvU10adw4pjcUNZ-o",
  authDomain: "chascoapp-2c8a1.firebaseapp.com",
  projectId: "chascoapp-2c8a1",
  storageBucket: "chascoapp-2c8a1.appspot.com",
  messagingSenderId: "339552335038",
  appId: "1:339552335038:web:15646f3885320035c69aef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);