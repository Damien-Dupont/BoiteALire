import React from "react";
import { Link } from "react-router-dom";

export interface INavbar {}

const Navbar: React.FunctionComponent<INavbar> = (props) => {
  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">
        La Boîte à Lire
      </Link>
      <div>
        <button className="btn btn-primary">Sign Up</button>
        <button className="btn btn-primary ms-2">Sign In</button>
        <button className="btn btn-danger ms-2">Logout</button>
      </div>
    </nav>
  );
};
export default Navbar;
