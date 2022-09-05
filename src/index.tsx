import React from "react";
import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";

import { UserContextProvider } from "./context/userContext";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
