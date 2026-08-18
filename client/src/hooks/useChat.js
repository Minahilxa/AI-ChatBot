import { useState } from "react";
import { sendChatMessage } from "../services/api";

const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async (userMessage) => {
    if (!userMessage.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setLoading(true);
    setError(null);

    try {
      const aiText = await sendChatMessage(userMessage);
      setMessages((prev) => [...prev, { role: "ai", text: aiText }]);
    } catch (err) {
      setError("Could not get a response from AI. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { messages, loading, error, sendMessage };
};

export default useChat;
