import API from "./api";

// GET DARES
export const fetchDares = (category, type) => {
  return API.get(`/dares?category=${category}&type=${type}`, {
    headers: {
      "x-game-key": import.meta.env.VITE_GAME_KEY,
    },
  });
};

// ADD DARE
export const addDare = (data) => {
  return API.post("/dares", data, {
    headers: {
      "x-game-key": import.meta.env.VITE_GAME_KEY,
    },
  });
};

// DELETE DARE
export const deleteDare = (id) => {
  return API.delete(`/dares/${id}`, {
    headers: {
      "x-game-key": import.meta.env.VITE_GAME_KEY,
    },
  });
};

// GET CATEGORIES
export const fetchDaresCategory = () => {
  return API.get("/dares/categories", {
    headers: {
      "x-game-key": import.meta.env.VITE_GAME_KEY,
    },
  });
};
