import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBTQ5Tr05ulRuhY2lsI7NHTJm0MlrMYO8",
  authDomain: "wsapp-aae13.firebaseapp.com",
  projectId: "wsapp-aae13",
  storageBucket: "wsapp-aae13.appspot.com",
  messagingSenderId: "770855844131",
  appId: "1:770855844131:web:03a442641b0f18bf62b496",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = getStorage(firebaseApp);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider, storage };
