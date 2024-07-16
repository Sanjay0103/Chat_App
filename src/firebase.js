import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBswBXvMtoFsgpAhJfjgiH7VPXpqQvFUUM",
  authDomain: "chat-1e5db.firebaseapp.com",
  projectId: "chat-1e5db",
  storageBucket: "chat-1e5db.appspot.com",
  messagingSenderId: "332516773197",
  appId: "1:332516773197:web:f5f99eb55e3380b3edbb04"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
