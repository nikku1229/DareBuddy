import { usePlayer } from "../context/PlayerContext";
import Toast from "../components/Toast";
import ShieldIcon from "../assets/Icons/ShieldIcon.svg";
import LeafIcon from "../assets/Icons/LeafIcon.svg";
import FireIcon from "../assets/Icons/FireIcon-o.svg";

function ThirdForm() {
  const { type, setType } = usePlayer();

  return (
    <>
      <Toast />
      <section className="type-section">
        <div className="icon-box">
          <img src={ShieldIcon} alt="type" />
        </div>
        <h2>Dare Category!</h2>
        <div className="select-box">
          <div
            onClick={() => setType("veg")}
            className={`option-box ${type === "veg" ? "active" : ""}`}
          >
            <img src={LeafIcon} alt="veg" />
            Veg
          </div>
          <div
            onClick={() => setType("nonveg")}
            className={`option-box ${type === "nonveg" ? "active" : ""}`}
          >
            <img src={FireIcon} alt="non-veg" />
            Non veg
          </div>
        </div>
      </section>
    </>
  );
}

export default ThirdForm;
