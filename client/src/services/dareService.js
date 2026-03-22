import API from "./api";

// GET DARES
export const fetchDares = (category, type) => {
  return API.get(`/dares?category=${category}&type=${type}`);
};

// ADD DARE
export const addDare = (data) => {
  return API.post("/dares", data);
};

// DELETE DARE
export const deleteDare = (id) => {
  return API.delete(`/dares/${id}`);
};