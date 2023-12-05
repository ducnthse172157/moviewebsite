import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyACmT0wwePYxpRa8Z-3ojpymEnWChHhpjg",
  authDomain: "myproject-app-65595.firebaseapp.com",
  projectId: "myproject-app-65595",
  storageBucket: "myproject-app-65595.appspot.com",
  messagingSenderId: "10979866963",
  appId: "1:10979866963:web:948f4d648cedfdeeca49a6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
