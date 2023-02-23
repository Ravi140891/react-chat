// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYkPyxTb6pATQ5U-uSeDM5-6W0yoh2zlY",
  authDomain: "chat-919ff.firebaseapp.com",
  projectId: "chat-919ff",
  storageBucket: "chat-919ff.appspot.com",
  messagingSenderId: "43683204617",
  appId: "1:43683204617:web:3d804e403383786944f2d8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
