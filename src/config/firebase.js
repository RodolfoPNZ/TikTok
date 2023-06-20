
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyAslLuUfaL0qV58DmQrvnBoxSDfLmeILlk",
  authDomain: "tiktok---jornada-8f0dc.firebaseapp.com",
  projectId: "tiktok---jornada-8f0dc",
  storageBucket: "tiktok---jornada-8f0dc.appspot.com",
  messagingSenderId: "724999662899",
  appId: "1:724999662899:web:62e7e01c14860fd514a246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;