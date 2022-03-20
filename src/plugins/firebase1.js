import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBPLOYcDzt-JbdIV_R73KDM7HiWNsIM_Cg",
    authDomain: "shopv-66209.firebaseapp.com",
    projectId: "shopv-66209",
    storageBucket: "shopv-66209.appspot.com",
    messagingSenderId: "796221200423",
    appId: "1:796221200423:web:0fc72c66bee0e9eb2b1602"
});

// Initialize Firebase

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

export { db, auth };