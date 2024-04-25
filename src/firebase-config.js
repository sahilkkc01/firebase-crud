// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfSPc7aQz4uXScp2ubp57xlHeMdJbAbtE",
  authDomain: "fir-crud-8cff4.firebaseapp.com",
  projectId: "fir-crud-8cff4",
  storageBucket: "fir-crud-8cff4.appspot.com",
  messagingSenderId: "392623990545",
  appId: "1:392623990545:web:f760fedb1e6289827f0eb0",
  measurementId: "G-0NFCZXZY79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);