import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsUr_kj6BNcvdi-G7OZkFnFUnB3XjXVvk",
  authDomain: "blog-87e8a.firebaseapp.com",
  projectId: "blog-87e8a",
  storageBucket: "blog-87e8a.appspot.com", // Corrigi um possível erro aqui
  messagingSenderId: "144331909852",
  appId: "1:144331909852:web:dd04a504a1b02bb62b6219",
  measurementId: "G-4NG94ZEYV8",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta Firestore e Auth
export const db = getFirestore(app);
export const auth = getAuth(app); // 🔥 Agora a autenticação pode ser usada em qualquer parte do código!
