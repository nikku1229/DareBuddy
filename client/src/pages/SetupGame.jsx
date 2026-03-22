import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SetupGame() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [playersCount, setPlayersCount] = useState(2);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [names, setNames] = useState([]);

  // NEXT
  const next = () => setStep(step + 1);

  // BACK
  const back = () => setStep(step - 1);

  // START GAME
  const startGame = () => {
    navigate("/game", {
      state: {
        players: names,
        category,
        type
      }
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Step {step}</h2>

      {/* STEP 1: PLAYER COUNT */}
      {step === 1 && (
        <div>
          <h3>Select Players</h3>
          <button onClick={() => setPlayersCount(playersCount - 1)}>-</button>
          <span>{playersCount}</span>
          <button onClick={() => setPlayersCount(playersCount + 1)}>+</button>

          <br /><br />
          <button onClick={next}>Next</button>
        </div>
      )}

      {/* STEP 2: CATEGORY */}
      {step === 2 && (
        <div>
          <h3>Select Location</h3>

          {["office", "college", "park", "home"].map((c) => (
            <button key={c} onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}

          <br /><br />
          <button onClick={back}>Back</button>
          <button onClick={next}>Next</button>
        </div>
      )}

      {/* STEP 3: TYPE */}
      {step === 3 && (
        <div>
          <h3>Select Type</h3>

          <button onClick={() => setType("veg")}>Veg</button>
          <button onClick={() => setType("nonveg")}>Non-Veg</button>

          <br /><br />
          <button onClick={back}>Back</button>
          <button onClick={next}>Next</button>
        </div>
      )}

      {/* STEP 4: PLAYER NAMES */}
      {step === 4 && (
        <div>
          <h3>Enter Player Names</h3>

          {Array.from({ length: playersCount }).map((_, i) => (
            <input
              key={i}
              placeholder={`Player ${i + 1}`}
              onChange={(e) => {
                const newNames = [...names];
                newNames[i] = e.target.value;
                setNames(newNames);
              }}
            />
          ))}

          <br /><br />
          <button onClick={back}>Back</button>
          <button onClick={startGame}>Start Game</button>
        </div>
      )}
    </div>
  );
}