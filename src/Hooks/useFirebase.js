import { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default function useFirebase() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();

  // Obserber

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  // Register user

  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        setUser(userCredential.user);
        // ...
      })
      .catch(error => {
        setError(error.message);
        // ..
      });
  };

  // Login User

  const userLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        setUser(userCredential.user);
        // ...
      })
      .catch(error => {
        setError(error.message);
      });
  };

  // userLogOut

  const userLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return { user, registerUser, userLogin, error, userLogOut };
}
