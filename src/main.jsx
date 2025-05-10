import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage";
import { Toaster } from "react-hot-toast";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <>
      <Toaster />
      <HomePage />
    </>
  </React.StrictMode>
);
