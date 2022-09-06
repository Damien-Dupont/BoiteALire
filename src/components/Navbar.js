import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
// import { INavbar, IAppContext } from "../@Types/lectures";

export default function Navbar() {
  const { toggleModals } = useContext(UserContext);
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {
      alert("For some reasons we can't log you out. Please retry later.");
    }
  };
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
        <button onClick={logOut} className="btn btn-danger ms-2">
          Logout
        </button>
      </div>
    </nav>
  );
}
