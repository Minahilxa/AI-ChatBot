import React, { useEffect, useRef } from "react";
import useChat from "../../hooks/useChat";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import "./Chat.css";

const Chat = () => {
  const { messages, loading, error, sendMessage } = useChat();
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="chat-container">
      <header className="chat-header">
        <div className="chat-header-avatar">AI</div>
        <div>
          <h1>Minahil Assistant</h1>
          <p className="chat-subtitle">Ask me anything</p>
        </div>
      </header>

      <div className="chat-messages">
        {messages.length === 0 && !loading && (
          <div className="chat-empty">
            👋 Start the conversation by typing a message below.
          </div>
        )}

        {messages.map((msg, idx) => (
          <MessageBubble key={idx} role={msg.role} text={msg.text} />
        ))}

        {loading && (
          <div className="bubble-row row-ai">
            <div className="bubble bubble-ai bubble-typing">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </div>
        )}

        {error && <div className="chat-error">{error}</div>}

        <div ref={bottomRef} />
      </div>

      <ChatInput onSend={sendMessage} loading={loading} />
    </div>
  );
};

export default Chat;
