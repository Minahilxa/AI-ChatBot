import React, { useState } from "react";

const ChatInput = ({ onSend, loading }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  };

  return (
    <form className="chat-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask something..."
        disabled={loading}
        autoFocus
      />
      <button type="submit" disabled={loading || !value.trim()}>
        {loading ? <span className="spinner" aria-label="loading" /> : "Send"}
      </button>
    </form>
  );
};

export default ChatInput;
