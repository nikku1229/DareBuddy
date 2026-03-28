import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SetupGame from "./pages/SetupGame";
import GamePlay from "./pages/GamePlay";
import ErrorPage from "./pages/ErrorPage";
import SuggestionsPage from "./pages/SuggestionsPage";
import ProtectedRoute from "./context/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/setup" element={<SetupGame />} />
      <Route path="/game" element={<GamePlay />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/suggestions" element={<SuggestionsPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
