'use client'

import { useState } from 'react';
import ChatBubble from '@/components/ChatBubble';
import MessageInput from '@/components/MessageInput';
import { Message } from '@/types/message';

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (text: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      from: 'user',
    };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await fetch('/api/bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      const botMsg: Message = {
        id: crypto.randomUUID(),
        text: data.message,
        from: 'bot',
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen flex-col p-4">
      <div className="mb-2 flex-1 space-y-2 overflow-y-auto">
        {messages.map((m) => (
          <ChatBubble key={m.id} text={m.text} from={m.from} />
        ))}
      </div>
      <MessageInput onSend={sendMessage} />
    </div>
  );
}
