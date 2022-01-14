import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDDp8sEujiapGpPITGp6qFyol7mk4LwcJE",
  authDomain: "marcetplace-acfc6.firebaseapp.com",
  projectId: "marcetplace-acfc6",
  storageBucket: "marcetplace-acfc6.appspot.com",
  messagingSenderId: "434071795081",
  appId: "1:434071795081:web:0d65dbe3fd3c20e6509d58",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
