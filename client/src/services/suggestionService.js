import API from "./api";

// GET SUGGESTIONS
export const fetchSuggestions = () => {
  return API.get("/suggestions", {
    headers: {
      "x-game-key": import.meta.env.VITE_GAME_KEY,
    },
  });
};

// ADD SUGGESTIONS
export const addSuggestions = (data) => {
  return API.post("/suggestions", data, {
    headers: {
      "x-game-key": import.meta.env.VITE_GAME_KEY,
    },
  });
};

// DELETE SUGGESTIONS
export const deleteSuggestions = (id) => {
  return API.delete(`/suggestions/${id}`, {
    headers: {
      "x-game-key": import.meta.env.VITE_GAME_KEY,
    },
  });
};
