import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";

export default function FirebaseInit() {
  initializeApp(firebaseConfig);
}
