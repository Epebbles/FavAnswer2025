import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import analytics from '@react-native-firebase/analytics;';
import app from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
const options2 = {
  timeZone: 'America/Los_Angeles',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};

const options = {
  timeZone: 'America/Los_Angeles',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const tomorrow = new Date();
tomorrow.setDate(new Date().getDate() + 1);
const formattedTomorrow = tomorrow.toLocaleDateString('en-US', options);
const TODAY = new Date().toLocaleDateString(undefined, options);
const TIME = new Date().toLocaleTimeString('en-US', options2);
GoogleSignin.configure({
  webClientId:
    '282715649612-htl49k6v9pjp3arg1nlu9jt257u6ljto.apps.googleusercontent.com',
});

export {
  app,
  firestore,
  auth,
  GoogleSignin,
  firebase,
  TODAY,
  TIME,
  formattedTomorrow,
};

// // Import the functions you need from the SDKs you need
// import {initializeApp} from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCJujHHRSF4VKBOhcAefAbGw0abw27M574',
  authDomain: 'favanswer-87db5.firebaseapp.com',
  projectId: 'favanswer-87db5',
  storageBucket: 'favanswer-87db5.appspot.com',
  messagingSenderId: '282715649612',
  appId: '1:282715649612:web:214ebb319e25a4169966e9',
  measurementId: 'G-12BNJB0THN',
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
