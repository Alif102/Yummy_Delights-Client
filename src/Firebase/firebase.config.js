

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export default auth;




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOlFj5OaDIzljILZtUxCbrwulWf1UNyoM",
  authDomain: "yummydelights-5e824.firebaseapp.com",
  projectId: "yummydelights-5e824",
  storageBucket: "yummydelights-5e824.appspot.com",
  messagingSenderId: "980155788742",
  appId: "1:980155788742:web:58eb7386816f2dba8516c7",
  measurementId: "G-4PQRXCX3W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
