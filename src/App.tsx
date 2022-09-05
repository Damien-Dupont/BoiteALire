import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUpModal";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <SignUp />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/" element={<AboutPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
