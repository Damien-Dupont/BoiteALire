import React, { createContext, useState, useEffect } from "react";
import { IAppContext } from "../@Types/lectures";

// export const UserContext = createContext<IAppContext | null>(null);
export const UserContext = createContext();

// const LectProvider: React.FC<React.ReactNode> = ({children}) => {CONST [tod, setTod] = React.useState<>

export function UserContextProvider(props) {
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
    <UserContext.Provider value={{ modalState, toggleModals }}>
      {props.children}
    </UserContext.Provider>
  );
}
