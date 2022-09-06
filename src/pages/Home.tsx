import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const { currentUser } = useContext(UserContext);
  const message: string =
    "If you already have an account, please sign in. If you don't, sign up!";
  return (
    <div className="container p-5">
      <h1 className="display-3 text-light">
        {currentUser ? `Welcome buddy` : `Welcome! ` + message}
      </h1>
    </div>
  );
};

export default HomePage;
