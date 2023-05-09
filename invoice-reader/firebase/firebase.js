import  {getAuth} from "firebase/auth"; //autentificare
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBj-1iw_5zOCZE-RZ1kzuy_wcb58XuW_1M",
  authDomain: "invoice-reader-4b865.firebaseapp.com",
  projectId: "invoice-reader-4b865",
  storageBucket: "invoice-reader-4b865.appspot.com",
  messagingSenderId: "1079218684020",
  appId: "1:1079218684020:web:759261781a389b346bd121"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);