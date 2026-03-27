import { useState } from "react";
import { useGame } from "../context/GameContext";
import { useAlert } from "../context/AlertContext";
import ShowDare from "../components/ShowDare";
import GameOver from "../components/GameOver";
import Loader from "../components/Loader";
import DiceIcon from "../assets/Icons/DiceIcon.svg";
import ThunderIcon from "../assets/Icons/ThunderIcon.svg";

function GameStart({ players }) {
  const {
    round,
    diceResults,
    currentPlayerIndex,
    roundFinished,
    isDiceRoll,
    rollDice,
    currentDare,
    lost,
    getDare,
    gameOver,
  } = useGame();
  const { showAlert, loader, setloader } = useAlert();

  const [diceInterval, setDiceInterval] = useState("");

  const diceRolling = () => {
    let count = 0;

    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 100 + 1);
      setDiceInterval(random);
      count++;

      if (count >= 20) {
        clearInterval(interval);
      }
    }, 50);
  };

  return (
    <>
      <section className="game-start-section main-container">
        {!gameOver && (
          <div className="round-details">
            <h2>Round</h2>
            <p>{round}</p>
          </div>
        )}

        {!currentDare && !gameOver ? (
          <>
            {diceResults.length > 0 && (
              <div className="player-results">
                {diceResults.map((p, i) => (
                  <div
                    className={`result-list ${(lost && lost.id) === p.id ? "active" : ""}`}
                    key={i}
                  >
                    <h3>{p.name}</h3>
                    <h3>{p.value}</h3>
                  </div>
                ))}
              </div>
            )}

            {currentPlayerIndex < players.length && !roundFinished && (
              <div className="player-turn">
                <p>
                  Player <span>{players[currentPlayerIndex]}</span> turn
                </p>
              </div>
            )}

            {loader ? (
              <>
                <Loader />
              </>
            ) : (
              <>
                {!roundFinished && (
                  <div className="dice-section">
                    <p>Dice roll (1-100)</p>
                    {isDiceRoll && (
                      <>
                        <h3>{diceInterval}</h3>

                        <button className="secondary-btn" disabled>
                          <img src={DiceIcon} alt="Roll" />
                          Roll Dice!
                        </button>
                      </>
                    )}

                    {!isDiceRoll && (
                      <button
                        className="secondary-btn"
                        onClick={() => {
                          rollDice(players);
                          diceRolling();
                        }}
                      >
                        <img src={DiceIcon} alt="Roll" />
                        Roll Dice!
                      </button>
                    )}
                  </div>
                )}
              </>
            )}

            {roundFinished && !currentDare && lost && (
              <div className="dare-section">
                <p>
                  <span>{lost.name}</span> has to do dare.
                </p>
                <button className="primary-btn" onClick={getDare}>
                  <img src={ThunderIcon} alt="show" /> Show dare
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            {!gameOver ? (
              <>
                <ShowDare />
              </>
            ) : (
              <>
                <GameOver />
              </>
            )}
          </>
        )}
      </section>
    </>
  );
}

export default GameStart;
