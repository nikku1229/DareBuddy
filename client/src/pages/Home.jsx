import { useNavigate } from "react-router-dom";
import FireIcon from "../assets/Icons/FireIcon.svg";
import Header from "../components/Header";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <Header></Header>
      <div className="home-container">
        <div className="icon-box">
          <img src={FireIcon} alt="Game" />
        </div>
        <h1>
          Dare<span>!</span>
        </h1>
        <p>Friends ke saath khelo wildest dare game!</p>
        <p>Only dares. Only chaos. 🔥</p>
        <button onClick={() => navigate("/setup")} className="primary-btn">
          Start Game!
        </button>
        <ul className="usps">
          <li>2-20 Players</li>
          <li>20+ Locations</li>
          <li>500+ Dares</li>
          <li>Veg & Non veg dares</li>
        </ul>
      </div>
    </div>
  );
}
