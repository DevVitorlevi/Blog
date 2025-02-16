import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBsUr_kj6BNcvdi-G7OZkFnFUnB3XjXVvk",
  authDomain: "blog-87e8a.firebaseapp.com",
  projectId: "blog-87e8a",
  storageBucket: "blog-87e8a.firebasestorage.app",
  messagingSenderId: "144331909852",
  appId: "1:144331909852:web:dd04a504a1b02bb62b6219",
  measurementId: "G-4NG94ZEYV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)