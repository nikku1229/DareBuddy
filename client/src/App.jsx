import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SetupGame from "./pages/SetupGame";
import GamePlay from "./pages/GamePlay";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/setup" element={<SetupGame />} />
      <Route path="/game" element={<GamePlay />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
