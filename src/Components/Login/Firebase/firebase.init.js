import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializedAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializedAuthentication;



// REACT_APP_API_KEY = AIzaSyA - 1dlZ4onjATM8dV9N - 0Rzktl647jEBjE
// REACT_APP_AUTH_DOMAIN = new- web - af2de.firebaseapp.com
// REACT_APP_PROJECT_ID = new- web - af2de
// REACT_APP_STORAGE_BUCKET = new- web - af2de.appspot.com
// REACT_APP_MESSAGING_SENDER_ID = 102357527410
// REACT_APP_APP_ID = 1: 102357527410: web: b45077dc5c57436d448beb