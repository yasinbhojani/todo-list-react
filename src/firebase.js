import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASJXPaC_PeA1e4J6sFDEuu3cOQaALnllQ",
  authDomain: "todo-list-9092c.firebaseapp.com",
  projectId: "todo-list-9092c",
  storageBucket: "todo-list-9092c.appspot.com",
  messagingSenderId: "820652927242",
  appId: "1:820652927242:web:d8207911d6efea895c72f3",
  measurementId: "G-JZ1FCW61Y1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);