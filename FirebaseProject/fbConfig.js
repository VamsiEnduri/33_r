  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  import {getAuth} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js"
  import {getFirestore} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js"
 
  const firebaseConfig = {
    apiKey: "AIzaSyDHkcBhrz_JfPtP-CN8koxIh7aUAjmZBk4",
    authDomain: "r-fa722.firebaseapp.com",
    projectId: "r-fa722",
    storageBucket: "r-fa722.firebasestorage.app",
    messagingSenderId: "814574742435",
    appId: "1:814574742435:web:520a142f4cde8431834816",
    measurementId: "G-MTM8E9XBVJ"
  };

  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
const firebaseAppProject=initializeApp(firebaseConfig)  // firebase project --> localproject initliize :--firebase --> local -> it wiill bring to local 
      export const authentication    =getAuth(firebaseAppProject)
      export const db=getFirestore(firebaseAppProject)