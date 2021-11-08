import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";
import FirebaseInit from "../Firebase/FirebaseInit";

FirebaseInit();

export default function useFirebase() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Obserber

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  // Register user

  const registerUser = (email, password, name, location, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        const newUser = { email, displayName: name };

        savetoDB(email, name, password);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration successfull",
          showConfirmButton: false,
          timer: 2000,
        });
        setUser(newUser);
        // date send to firebase

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch(error => {
            setError(error.message);
          });

        const destination = "/login";
        history.replace(destination);
      })
      .catch(error => {
        const errorMessage = (error.message = "User already registered");
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  // user save to database

  const savetoDB = (email, displayName, password) => {
    const users = { email, displayName, password };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    });
  };

  // Login User

  const userLogin = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successfull",
          showConfirmButton: false,
          timer: 2000,
        });

        setUser(userCredential.user);
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch(error => {
        const errorMessage = (error.message = "Unable to login try again !");
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  // Google login

  const googleLogin = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // userLogOut

  const userLogOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        Swal.fire("See you again !", "Successfully Logged Out", "success");
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    error,
    isLoading,
    setIsLoading,
    registerUser,
    userLogin,
    googleLogin,
    userLogOut,
  };
}
