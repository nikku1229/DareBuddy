import { usePlayer } from "../context/PlayerContext";
import Toast from "./Toast";
import AddUserIcon from "../assets/Icons/AddUserIcon.svg";

function ForthForm() {
  const { playersCount, names, setNames } = usePlayer();

  return (
    <>
      <Toast />
      <section className="player-input-section">
        <div className="icon-box">
          <img src={AddUserIcon} alt="playername" />
        </div>
        <h2>Player Names</h2>
        <div className="input-field-section">
          {Array.from({ length: playersCount }).map((_, i) => (
            <div className="input-area" key={i}>
              <div className="player-counts">{i + 1}</div>
              <input
                key={i}
                placeholder={`Enter player ${i + 1} name...`}
                onChange={(e) => {
                  const newNames = [...names];
                  newNames[i] = e.target.value;
                  setNames(newNames);
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ForthForm;
