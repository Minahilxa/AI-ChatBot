import React from "react";
import "./Chat.css";

const MessageBubble = ({ role, text }) => {
  return (
    <div className={`bubble-row ${role === "user" ? "row-user" : "row-ai"}`}>
      <div
        className={`bubble ${role === "user" ? "bubble-user" : "bubble-ai"}`}
      >
        {text}
      </div>
    </div>
  );
};

export default MessageBubble;
