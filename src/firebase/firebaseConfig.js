import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLN0ENeezBP8gbzeFtE2l56-j_qLWN3Bg",
  authDomain: "kowshik-portfolio-5f23d.firebaseapp.com",
  projectId: "kowshik-portfolio-5f23d",
  storageBucket: "kowshik-portfolio-5f23d.firebasestorage.app",
  messagingSenderId: "721208146884",
  appId: "1:721208146884:web:1a0db32f0fa05e33e8c291",
  measurementId: "G-MH9QB77E2Y"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;