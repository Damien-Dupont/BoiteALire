import React from "react";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Navbar from "./components/Navbar";
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal";
import Private from "./pages/Private/Private";
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>L'Arbre à Lire</title>
      </Helmet>
      <SignUpModal />
      <SignInModal />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/" element={<AboutPage />}></Route>
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
