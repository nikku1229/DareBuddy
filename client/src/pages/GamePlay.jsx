import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDares } from "../services/dareService";

export default function GamePlay() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const players = state.players;
  const category = state.category;
  const type = state.type;

  const [diceResults, setDiceResults] = useState([]);
  const [winner, setWinner] = useState(null);
  const [dares, setDares] = useState([]);
  const [usedDares, setUsedDares] = useState([]);
  const [currentDare, setCurrentDare] = useState("");

  const [customDare, setCustomDare] = useState("");
  const [customDares, setCustomDares] = useState([]);

  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [hasRolled, setHasRolled] = useState([]);
  const [roundFinished, setRoundFinished] = useState(false);

  // 🎯 Fetch dares (ONLY ONCE)
  useEffect(() => {
    const getData = async () => {
      const res = await fetchDares(category, type);
      setDares(res.data);
    };

    getData();
  }, []);

  // roll dice
  const rollDice = () => {
    const totalDares = dares.length + customDares.length;

    if (usedDares.length >= totalDares) {
      setGameOver(true);
      return;
    }

    const currentPlayer = players[currentPlayerIndex];

    const value = Math.floor(Math.random() * 100) + 1;

    const newResults = [...diceResults];
    newResults.push({ name: currentPlayer, value });

    setDiceResults(newResults);
    setHasRolled([...hasRolled, currentPlayer]);

    // Next player turn
    if (currentPlayerIndex < players.length - 1) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
    } else {
      // All players rolled
      const lowest = newResults.reduce((min, p) =>
        p.value < min.value ? p : min,
      );

      setWinner(lowest);
      setRoundFinished(true);
    }
  };

  // 🎯 Get random dare (no repeat + custom merge)
  const getDare = () => {
    if (!roundFinished) {
      alert("All players must roll dice first!");
      return;
    }

    if (currentDare) return; // ❌ ek round me ek hi dare

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
    setRound(round + 1);
    setDiceResults([]);
    setWinner(null);
    setCurrentDare("");
    setCurrentPlayerIndex(0);
    setHasRolled([]);
    setRoundFinished(false);
  };

  const restartGame = () => {
    navigate("/");
  };

  // ➕ Add custom dare
  const addCustomDare = () => {
    if (!customDare) return;

    setCustomDares([...customDares, customDare]);
    setCustomDare("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>🎮 DareBuddy Game</h2>

      <h3>Turn: {players[currentPlayerIndex]}</h3>
      <h3>Round: {round}</h3>
      {players.map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      {!roundFinished && <button onClick={rollDice}>🎲 Roll Dice</button>}

      {diceResults.length > 0 && (
        <div>
          <h3>Results:</h3>
          {diceResults.map((p, i) => (
            <p key={i}>
              {p.name}: {p.value}
            </p>
          ))}
        </div>
      )}

      {winner && (
        <h2 style={{ color: "red" }}>{winner.name} will do the dare!</h2>
      )}

      {roundFinished && !currentDare && (
        <button onClick={getDare}>Show Dare</button>
      )}

      {currentDare && <h3>{currentDare}</h3>}

      {currentDare && !gameOver && (
        <button onClick={nextRound}>Next Round 🔄</button>
      )}

      {gameOver && (
        <div>
          <h2>🎉 Game Over!</h2>
          <button onClick={restartGame}>Restart Game 🔁</button>
        </div>
      )}

      <hr />

      <h3>Add Custom Dare</h3>
      <input
        value={customDare}
        onChange={(e) => setCustomDare(e.target.value)}
      />
      <button onClick={addCustomDare}>Add</button>
    </div>
  );
}
