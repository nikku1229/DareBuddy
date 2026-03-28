import API from "./api";

// GET SUGGESTIONS
export const fetchSuggestions = () => {
  return API.get("/suggestions", {
    headers: {
      "x-game-key": import.meta.env.VITE_GAME_KEY,
    },
  });
};
