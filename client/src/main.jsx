import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PlayerProvider } from "./context/PlayerContext.jsx";
import { GameProvider } from "./context/GameContext.jsx";
import { AlertProvider } from "./context/AlertContext.jsx";
import { SuggestionsProvider } from "./context/SuggestionsContext.jsx";
import BackGround from "./components/BackGround";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AlertProvider>
    <PlayerProvider>
      <GameProvider>
        <SuggestionsProvider>
          <BrowserRouter>
            <BackGround />
            <App />
          </BrowserRouter>
        </SuggestionsProvider>
      </GameProvider>
    </PlayerProvider>
  </AlertProvider>,
);
