import { createContext, useContext, useState, useEffect } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [dares, setDares] = useState([]);
  const [diceResults, setDiceResults] = useState([]);
  const [winner, setWinner] = useState(null);
  const [usedDares, setUsedDares] = useState([]);
  const [currentDare, setCurrentDare] = useState("");
  const [customDare, setCustomDare] = useState("");
  const [customDares, setCustomDares] = useState([]);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [hasRolled, setHasRolled] = useState([]);
  const [roundFinished, setRoundFinished] = useState(false);

  return (
    <GameContext.Provider
      value={{
        dares,
        setDares,
        diceResults,
        setDiceResults,
        winner,
        setWinner,
        usedDares,
        setUsedDares,
        currentDare,
        setCurrentDare,
        customDare,
        setCustomDare,
        customDares,
        setCustomDares,
        round,
        setRound,
        gameOver,
        setGameOver,
        currentPlayerIndex,
        setCurrentPlayerIndex,
        hasRolled,
        setHasRolled,
        roundFinished,
        setRoundFinished,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
