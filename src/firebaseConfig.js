import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAljWijWq8dvQPEtPp2vjRIjGY8TK_m12w",
  authDomain: "portfolio-cedc2.firebaseapp.com",
  projectId: "portfolio-cedc2",
  storageBucket: "portfolio-cedc2.appspot.com",
  messagingSenderId: "1030265585991",
  appId: "1:1030265585991:web:1aac9b183f0842cad28c62",
  measurementId: "G-82FS92F7FL",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const database = getFirestore(app);
