import React, { useContext, useEffect, useState } from 'react';
import Message from './Message';
import { ChatContext } from "../Context/ChatContext";
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    if (data.chatId) {
      const unSub = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
        if (doc.exists()) {
          setMessages(doc.data().messages || []);
        }
      });

      return () => {
        unSub();
      };
    }
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages.length > 0 ? (
        messages.map((m) => <Message key={m.id} message={m} />)
      ) : (
        <p>No messages yet</p>
      )}
    </div>
  );
};

export default Messages;
