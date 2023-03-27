import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage, ref, uploadBytes, getDownloadURL, getBytes } from 'firebase/storage'
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, setDoc, deleteDoc } from 'firebase/firestore'

import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCe_i7xF1ObCVA3jaAvU10adw4pjcUNZ-o",
  authDomain: "chascoapp-2c8a1.firebaseapp.com",
  projectId: "chascoapp-2c8a1",
  storageBucket: "chascoapp-2c8a1.appspot.com",
  messagingSenderId: "339552335038",
  appId: "1:339552335038:web:15646f3885320035c69aef"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);