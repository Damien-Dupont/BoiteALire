import React, { createContext, useState, useEffect } from "react";
// import { IAppContext } from "../@Types/lectures";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase-config";

// export const UserContext = createContext<IAppContext | null>(null);
export const UserContext = createContext();

// const LectProvider: React.FC<React.ReactNode> = ({children}) => {CONST [tod, setTod] = React.useState<>

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  const signUp = (email, pwd) =>
    createUserWithEmailAndPassword(auth, email, pwd);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoadingData(false);
    });
    return unsuscribe;
  }, []);

  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false,
  });
  const toggleModals = (modal) => {
    if (modal === "SignIn") {
      setModalState({
        signUpModal: false,
        signInModal: true,
      });
    }
    if (modal === "SignUp") {
      setModalState({
        signUpModal: true,
        signInModal: false,
      });
    }
    if (modal === "close") {
      setModalState({
        signUpModal: false,
        signInModal: false,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{ modalState, toggleModals, signUp, currentUser }}
    >
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
