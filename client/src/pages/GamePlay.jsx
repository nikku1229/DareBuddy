import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchDares } from "../services/dareService";
import { useGame } from "../context/GameContext";
import { useAlert } from "../context/AlertContext";
import GameHeader from "../components/GameHeader";
import GameStart from "../components/GameStart";

export default function GamePlay() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { setDares } = useGame();
  const { setLoader, showToast } = useAlert();

  const players = state.players;
  const category = state.category;
  const type = state.type;

  useEffect(() => {
    const getData = async () => {
      try {
        setLoader(true);
        const res = await fetchDares(category, type);
        setDares(res.data);
      } catch (err) {
        showToast("Network Error");
        navigate("setup");
      } finally {
        setLoader(false);
      }
    };

    getData();
  }, []);

  return (
    <>
      <GameHeader players={players} category={category} type={type} />

      <GameStart players={players} />
    </>
  );
}
