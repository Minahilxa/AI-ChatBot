import React, { useState } from "react";
import axios from "axios";

const Chat = () => {
  const [userMessage, setUserMessage] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/chat", {
        userMessage,
      });
      setAiResponse(response.data.response.choices[0].message.content);
    } catch (error) {
      setAiResponse("Error: Could not get a response from AI.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Chat with AI</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Ask something"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Send"}
        </button>
      </form>
      {aiResponse && (
        <div>
          <h3>AI Response:</h3>
          <p>{aiResponse}</p>
        </div>
      )}
    </div>
  );
};

export default Chat;
