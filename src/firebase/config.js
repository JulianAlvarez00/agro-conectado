import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQuPRY9i3YqK3EhCxPnWh8dGneBgSZhiU",
  authDomain: "agro-conecta-dd34f.firebaseapp.com",
  projectId: "agro-conecta-dd34f",
  storageBucket: "agro-conecta-dd34f.firebasestorage.app",
  messagingSenderId: "396820649048",
  appId: "1:396820649048:web:5dea56dac0ff976596662d",
  measurementId: "G-52SPD0T4RQ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
