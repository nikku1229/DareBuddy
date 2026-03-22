import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>DareBuddy 🔥</h1>
      <button onClick={() => navigate("/setup")}>
        Start Game
      </button>
    </div>
  );
}