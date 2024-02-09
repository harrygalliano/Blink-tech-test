import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import conversationsData from "../../data/data.json";

const ConversationDetail = () => {
  const { conversationId } = useParams();
  const [conversation, setConversation] = useState(null);
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    const convo = conversationsData.find((conv) => conv.id === conversationId);
    setConversation(convo);
  }, [conversationId]);

  const generateId = () => {
    return "xxxxxxxxyxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const handleInputChange = (event) => {
    setMessageText(event.target.value);
  };

  const handleSendClick = () => {
    const newMessage = {
      id: generateId(),
      text: messageText,
      last_updated: new Date().toISOString(),
    };

    if (conversation) {
      const updatedMessages = [...conversation.messages, newMessage];
      const updatedConversation = {
        ...conversation,
        messages: updatedMessages,
      };
      setConversation(updatedConversation);
    }

    setMessageText("");
  };

  if (!conversation) return <div>Conversation not found</div>;

  return (
    <div>
      <h2>{conversation.name}</h2>
      <p>Last Updated: {conversation.last_updated}</p>
      <ul>
        {conversation.messages.map((message) => (
          <li key={message.id}>
            <p>{message.text}</p>
            <small>Last Updated: {message.last_updated}</small>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={messageText}
          onChange={handleInputChange}
          placeholder="Type your message here..."
        />
        <button onClick={handleSendClick}>Send</button>
      </div>
    </div>
  );
};

export default ConversationDetail;
