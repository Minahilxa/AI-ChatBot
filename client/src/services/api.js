import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

export const sendChatMessage = async (userMessage) => {
  const response = await api.post("/chat", { userMessage });
  return response.data.response.choices[0].message.content;
};

export default api;
