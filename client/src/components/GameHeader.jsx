import { useState, Activity } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../context/GameContext";
import { useAlert } from "../context/AlertContext";
import Toast from "../components/Toast";
import CrossIcon from "../assets/Icons/CrossIcon.svg";
import Logo from "../assets/Logos/Favicon.png";

function GameHeader({ players, category, type }) {
  const {
    dares,
    usedDares,
    customDares,
    customDare,
    setCustomDare,
    setCustomDares,
  } = useGame();
  const { showToast } = useAlert();
  const [isCustomDareFieldVisible, setIsCustomDareVisible] = useState(false);

  const navigate = useNavigate();

  const addCustomDare = (e) => {
    e.preventDefault();
    if (!customDare) return;

    setCustomDares([...customDares, customDare]);
    setCustomDare("");
    showToast("Dare Added");
  };

  return (
    <>
      <div className="game-header">
        <header className="header">
          <div className="game-details m-game-details">
            <img
              src={Logo}
              alt="Logo"
              onClick={() => navigate("/")}
              className="m-hide"
            />
            <h3>{category}</h3>
            <h4>{type}</h4>
            <p className="m-hide">Played: {players.length}</p>
          </div>

          <div className="game-details">
            <h3>
              Total dares:{" "}
              {dares.length + customDares.length - usedDares.length}
            </h3>

            <div
              className="custom-dare-add-btn"
              onClick={() => setIsCustomDareVisible(!isCustomDareFieldVisible)}
            >
              +
            </div>
          </div>
        </header>
      </div>
      <Activity mode={isCustomDareFieldVisible ? "visible" : "hidden"}>
        <section className="custom-dare-section">
          <Toast />
          <div className="custom-dare-field">
            <div className="head">
              <h3>Type your custom dare</h3>
              <img
                src={CrossIcon}
                alt="close"
                onClick={() =>
                  setIsCustomDareVisible(!isCustomDareFieldVisible)
                }
              />
            </div>
            <form onSubmit={addCustomDare} className="content">
              <input
                value={customDare}
                placeholder="Type your dare..."
                onChange={(e) => setCustomDare(e.target.value)}
              />
              <button type="submit" className="secondary-btn">
                Add Dare
              </button>
            </form>
          </div>
        </section>
      </Activity>
    </>
  );
}

export default GameHeader;
