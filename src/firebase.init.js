// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId

    // apiKey:"AIzaSyBDOz125LLyDRRIsDfYgtiZUYXbCr8eNHc",
    // authDomain:"bicycle-parts.firebaseapp.com",
    // projectId:"bicycle-parts",
    // storageBucket:"bicycle-parts.appspot.com",
    // messagingSenderId:"388693190955",
    // appId:"1:388693190955:web:7a202e7d64bb78da067d6e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth