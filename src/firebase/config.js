
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCn4L_a1Cf8NScQBRDxA-4IvavVrMz84UU",
  authDomain: "microproyecto-2-64016.firebaseapp.com",
  projectId: "microproyecto-2-64016",
  storageBucket: "microproyecto-2-64016.appspot.com",
  messagingSenderId: "670464551021",
  appId: "1:670464551021:web:9d96d59876ce938a51b764",
  measurementId: "G-Y2VE9EZCVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });