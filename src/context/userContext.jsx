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
  const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd);

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
        addBookModal: false,
      });
    }
    if (modal === "SignUp") {
      setModalState({
        signUpModal: true,
        signInModal: false,
        addBookModal: false,
      });
    }
    if (modal === "AddBook") {
      setModalState({
        signUpModal: false,
        signInModal: false,
        addBookModal: true,
      });
    }
    if (modal === "close") {
      setModalState({
        signUpModal: false,
        signInModal: false,
        addBookModal: false,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{ modalState, toggleModals, signUp, signIn, currentUser }}
    >
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
