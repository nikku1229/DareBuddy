import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchDares } from "../services/dareService";
import { useGame } from "../context/GameContext";
import GameHeader from "../components/GameHeader";
import GameStart from "../components/GameStart";

export default function GamePlay() {
  const { state } = useLocation();
  const { setDares } = useGame();

  const players = state.players;
  const category = state.category;
  const type = state.type;

  useEffect(() => {
    const getData = async () => {
      const res = await fetchDares(category, type);
      setDares(res.data);
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
