// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtVE59a_UqtARCD9KtWZM75lbdEGDW7vU",
  authDomain: "tiktok---clone-e6ffb.firebaseapp.com",
  projectId: "tiktok---clone-e6ffb",
  storageBucket: "tiktok---clone-e6ffb.appspot.com",
  messagingSenderId: "121711027685",
  appId: "1:121711027685:web:5cafa9303b7684580dfb0c"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db