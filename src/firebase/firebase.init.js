// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



const firebaseConfig = {
  apiKey: "AIzaSyBwNfFgwZd5bc97MLTnMPhkSu5SOW6b014",
  authDomain: "dreamjob-e9951.firebaseapp.com",
  projectId: "dreamjob-e9951",
  storageBucket: "dreamjob-e9951.appspot.com",
  messagingSenderId: "586497259899",
  appId: "1:586497259899:web:c8a3e85fbeb492d907e5de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;