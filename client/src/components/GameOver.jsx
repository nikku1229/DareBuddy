import { useNavigate } from "react-router-dom";
import TrophyIcon from "../assets/Icons/TrophyIcon.svg";
import ReloadIcon from "../assets/Icons/ReloadIcon.svg";

function GameOver() {
  const navigate = useNavigate();

  const restartGame = () => {
    navigate("/");
  };

  return (
    <section className="game-over-section">
      <div className="icon-box">
        <img src={TrophyIcon} alt="Game over" />
      </div>
      <h2>Game Over!</h2>
      <button onClick={restartGame} className="secondary-btn">
        Restart Game!
        <img src={ReloadIcon} alt="Restart" />
      </button>
    </section>
  );
}

export default GameOver;
