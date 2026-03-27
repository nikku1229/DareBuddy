import { usePlayer } from "../context/PlayerContext";
import { useAlert } from "../context/AlertContext";
import Toast from "../components/Toast";
import UserIcon from "../assets/Icons/UserIcon.svg";

function FirstForm() {
  const { playersCount, setPlayersCount } = usePlayer();
  const { showToast } = useAlert();

  return (
    <>
      <Toast />
      <section className="player-count-section">
        <div className="icon-box">
          <img src={UserIcon} alt="Users" />
        </div>
        <h2>Number of players??</h2>
        <p>Minimum 2 players</p>
        <div className="count-btns">
          <button
            onClick={() => {
              if (playersCount <= 2) {
                showToast("minimum 2 player need");
              } else {
                setPlayersCount(playersCount - 1);
              }
            }}
            className="toogle-player-count"
          >
            -
          </button>
          <h3>{playersCount}</h3>
          <button
            onClick={() => {
              if (playersCount >= 20) {
                showToast("Max 20 player");
              } else {
                setPlayersCount(playersCount + 1);
              }
            }}
            className="toogle-player-count"
          >
            +
          </button>
        </div>
      </section>
    </>
  );
}

export default FirstForm;
