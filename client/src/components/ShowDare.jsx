import { useGame } from "../context/GameContext";
import FireIcon from "../assets/Icons/FireIcon-o.svg";
import ReloadIcon from "../assets/Icons/ReloadIcon.svg";

function ShowDare() {
  const { currentDare, lost, nextRound } = useGame();

  return (
    <>
      <section className="show-dare-section">
        <img src={FireIcon} alt="dare" />
        <p>
          <span>{lost.name}</span>'s dare
        </p>
        <h3>{currentDare}</h3>
      </section>

      <button className="secondary-btn next-rnd" onClick={nextRound}>
        Next Round
        <img src={ReloadIcon} alt="next" />
      </button>
    </>
  );
}

export default ShowDare;
