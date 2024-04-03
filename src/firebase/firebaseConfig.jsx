// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhj6U8fFMPXDgJQX33rVHbQSqMAY_5h4E",
  authDomain: "mailbox-ac5ed.firebaseapp.com",
  projectId: "mailbox-ac5ed",
  storageBucket: "mailbox-ac5ed.appspot.com",
  messagingSenderId: "548030003418",
  appId: "1:548030003418:web:11b021ab21918dc7ad8de3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);