import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAwp6egP-mqeDo99Vc7aEH_QxjunCATPmI",
  authDomain: "blog-app-c833b.firebaseapp.com",
  projectId: "blog-app-c833b",
  storageBucket: "blog-app-c833b.firebasestorage.app",
  messagingSenderId: "366703720168",
  appId: "1:366703720168:web:d4a5e2bb43bb9294f1fb5d",
  measurementId: "G-S80KVSQRZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
