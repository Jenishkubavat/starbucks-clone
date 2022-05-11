import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCXItZhbFPfy23vd7mfGoz37dgAKia2qYc",
  authDomain: "starbucks-clone-59d71.firebaseapp.com",
  projectId: "starbucks-clone-59d71",
  storageBucket: "starbucks-clone-59d71.appspot.com",
  messagingSenderId: "303596666320",
  appId: "1:303596666320:web:80990fd6b4b79cc2ca4dd5"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
