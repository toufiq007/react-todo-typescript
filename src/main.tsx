import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ToDoProvider } from "./context/ToDoContext.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToDoProvider>
        <App />
      </ToDoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
