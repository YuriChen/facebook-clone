import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-jdRmVAzRiLW36PcfxSBHXq2u93xyrT8",
    authDomain: "facebook-clone-fcec9.firebaseapp.com",
    projectId: "facebook-clone-fcec9",
    storageBucket: "facebook-clone-fcec9.appspot.com",
    messagingSenderId: "1003253538133",
    appId: "1:1003253538133:web:cfbc015947b05e503ae3dc",
    measurementId: "G-JE04YM0M31"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;