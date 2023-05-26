import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDWieJUewdb_6zNHaArU4fdvslWs35LooA",
  authDomain: "task-c17ed.firebaseapp.com",
  projectId: "task-c17ed",
  storageBucket: "task-c17ed.appspot.com",
  messagingSenderId: "539976587912",
  appId: "1:539976587912:web:5cca69568e97fd3a1d1d3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = firebase.firestore()
export default database 