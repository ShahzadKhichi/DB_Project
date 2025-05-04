import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getGames = () => api.get("/games");
export const getGame = (id) => api.get(`/games/${id}`);
export const addGame = (game) => api.post("/games", game);
export const deleteGame = (id) => api.delete(`/games/${id}`);
export const login = (credentials) => api.post("/auth/login", credentials);
export const register = (user) => api.post("/auth/register", user);
export const addToCart = (gameId) => api.post("/orders/cart", { gameId });
export const getCart = () => api.get("/orders/cart");
export const removeFromCart = (gameId) => api.delete(`/orders/cart/${gameId}`);
export const placeOrder = () => api.post("/orders");
export const getLatestOrder = () => api.get("/orders/latest");
export const confirmPayment = (orderId) =>
  api.post("/orders/payment", { orderId });

export default api;
