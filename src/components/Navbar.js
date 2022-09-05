import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";
// import { INavbar, IAppContext } from "../@Types/lectures";

export default function Navbar() {
  const { toggleModals } = useContext(UserContext);
  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">
        La Boîte à Lire
      </Link>
      <div>
        <button
          onClick={() => toggleModals("SignUp")}
          className="btn btn-primary"
        >
          Sign Up
        </button>
        <button
          onClick={() => toggleModals("SignIn")}
          className="btn btn-primary ms-2"
        >
          Sign In
        </button>
        <button className="btn btn-danger ms-2">Logout</button>
      </div>
    </nav>
  );
}
