import firebase from "firebase";

const firebaseConfig = {
  
  {/* Aquí va apiKey Firebase privada */}
  
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
