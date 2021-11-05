import { useEffect, useState } from "react";
import FirebaseInit from "../Firebase/FirebaseInit";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

FirebaseInit();

export default function useFirebase() {
  const [user, setUser] = useState({});
  const auth = getAuth();

  // observer

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);

  // Register user

  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  // SignOut

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        // An error happened.
      });
  };

  return { user, logOut, registerUser };
}
