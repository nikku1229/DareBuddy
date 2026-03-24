import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { PlayerProvider } from "./context/PlayerContext.jsx";
import BackGround from "./components/BackGround";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PlayerProvider>
    <BrowserRouter>
      <BackGround />
      <App />
    </BrowserRouter>
  </PlayerProvider>,
);
