import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import FirebaseInit from "../Firebase/FirebaseInit";

FirebaseInit();

export default function useFirebase() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

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
  }, []);

  // Register user

  const registerUser = (email, password, location, history) => {
    setIsLoading(false);
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration successfull",
          showConfirmButton: false,
          timer: 2000,
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

  return { user, error, isLoading, registerUser, userLogin, userLogOut };
}
