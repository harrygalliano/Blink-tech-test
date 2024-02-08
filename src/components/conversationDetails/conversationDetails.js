import React from "react";
import { useParams } from "react-router-dom";
import conversations from "../../data/data.json";

const ConversationDetail = () => {
  const { conversationId } = useParams();
  const conversation = conversations.find((conv) => conv.id === conversationId);

  const params = useParams();
  console.log(params);
  console.log(conversationId);
  console.log(typeof id);
  conversations.forEach((conv) => console.log(typeof conv.id));

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
    </div>
  );
};

export default ConversationDetail;
