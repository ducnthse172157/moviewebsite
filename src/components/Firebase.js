import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
  const firebaseConfig = {
    apiKey: "AIzaSyAxBLQa_tOtqMglJPCz2wH5YSkxzzmgrGY",
    authDomain: "films-d8ac2.firebaseapp.com",
    projectId: "films-d8ac2",
    storageBucket: "films-d8ac2.appspot.com",
    messagingSenderId: "694880294704",
    appId: "1:694880294704:web:7481584042d9ddb6c75af5",
    measurementId: "G-1W2TCBDBFV"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
