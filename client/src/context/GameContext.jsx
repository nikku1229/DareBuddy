import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [dares, setDares] = useState([]);
  const [diceResults, setDiceResults] = useState([]);
  const [lost, setLost] = useState(null);
  const [usedDares, setUsedDares] = useState([]);
  const [currentDare, setCurrentDare] = useState("");
  const [customDare, setCustomDare] = useState("");
  const [customDares, setCustomDares] = useState([]);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [isDiceRoll, setIsDiceRoll] = useState(false);
  const [hasRolled, setHasRolled] = useState([]);
  const [roundFinished, setRoundFinished] = useState(false);

  const rollDice = (players) => {
    setIsDiceRoll(true);

    setTimeout(() => {
      const currentPlayer = players[currentPlayerIndex];

      const value = Math.floor(Math.random() * 100) + 1;

      const newResults = [...diceResults];
      newResults.push({ id: currentPlayerIndex, name: currentPlayer, value });
      setIsDiceRoll(false);
      setDiceResults(newResults);
      setHasRolled([...hasRolled, currentPlayer]);

      if (currentPlayerIndex < players.length - 1) {
        setCurrentPlayerIndex(currentPlayerIndex + 1);
      } else {
        const lowest = newResults.reduce((min, p) =>
          p.value < min.value ? p : min,
        );

        setLost(lowest);
        setRoundFinished(true);
      }
    }, 1000);
  };

  const getDare = () => {
    if (currentDare) return;

    const allDares = [
      ...dares.map((d) => ({ text: d.text, id: d._id })),
      ...customDares.map((d, i) => ({ text: d, id: "custom" + i })),
    ];

    const available = allDares.filter((d) => !usedDares.includes(d.id));

    if (available.length === 0) {
      setGameOver(true);
      return;
    }

    const random = available[Math.floor(Math.random() * available.length)];

    setCurrentDare(random.text);
    setUsedDares([...usedDares, random.id]);
  };

  const nextRound = () => {
    const totalDares = dares.length + customDares.length;

    if (usedDares.length >= totalDares) {
      setGameOver(true);
      return;
    }

    setRound(round + 1);
    setDiceResults([]);
    setLost(null);
    setCurrentDare("");
    setCurrentPlayerIndex(0);
    setHasRolled([]);
    setRoundFinished(false);
  };

  return (
    <GameContext.Provider
      value={{
        dares,
        setDares,
        diceResults,
        setDiceResults,
        lost,
        setLost,
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
        isDiceRoll,
        hasRolled,
        setHasRolled,
        roundFinished,
        setRoundFinished,
        rollDice,
        getDare,
        nextRound,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
