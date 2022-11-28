
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDaZTBbDdZf2CrgGHs9e9dQ7LxGbIxy2b8",
  authDomain: "eccomercesabino.firebaseapp.com",
  projectId: "eccomercesabino",
  storageBucket: "eccomercesabino.appspot.com",
  messagingSenderId: "190948399517",
  appId: "1:190948399517:web:5b003c83c1d14e8da13774"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = ()=> app