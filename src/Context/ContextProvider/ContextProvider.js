import React, { createContext } from "react";
import FirebaseInit from "../../Firebase/FirebaseInit";
import useFirebase from "../../Hooks/useFirebase";

export const AuthContext = createContext();
FirebaseInit();

export default function ContextProvider({ children }) {
  const allContext = useFirebase();

  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
}
