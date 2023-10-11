

// TODO: Replace the following with your app's Firebase project configuration





// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmdWCnfz7jyqePUkksoJyyfl53OiOGFCQ",
  authDomain: "registration-3e70b.firebaseapp.com",
  databaseURL: "https://registration-3e70b-default-rtdb.firebaseio.com",
  projectId: "registration-3e70b",
  storageBucket: "registration-3e70b.appspot.com",
  messagingSenderId: "445102015491",
  appId: "1:445102015491:web:dbf2bb95235be22890fa36",
  measurementId: "G-CCBMRF3GN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 const db = getDatabase(app);
 document.getElementById("submit").addEventListener('click',function(e){
     e.preventDefault();
     set(ref(db,'user/'+document.getElementById("username").value),
     {

          username:document.getElementById("username").value,
          email:document.getElementById("email").value,
          phone:document.getElementById("phone").value
     })
 });