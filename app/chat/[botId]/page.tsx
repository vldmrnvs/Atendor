'use client';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import ChatBubble from '@/components/ChatBubble';
import MessageInput from '@/components/MessageInput';
import { Message } from '@/types/message';
import { mockBots } from '@/lib/mock/bots';
import { Loader2 } from 'lucide-react';

export default function Chat({ params }: { params: { botId: string } }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const bot = mockBots.find((b) => b.id === params.botId);
  if (!bot) return notFound();

  const sendMessage = async (text: string) => {
    const userMsg: Message = { id: Date.now().toString(), text, from: 'user' };
    setMessages((prev) => [...prev, userMsg]);

    setLoading(true);
    // simulate bot response
    setTimeout(() => {
      const botMsg: Message = {
        id: crypto.randomUUID(),
        text: 'Respuesta simulada del bot',
        from: 'bot',
      };
      setMessages((prev) => [...prev, botMsg]);
      setLoading(false);
    }, 800);
  };

  return (
    <main className="flex h-screen flex-col p-4">
      <h1 className="mb-4 text-xl font-semibold">Chat con {bot.name}</h1>
      <div className="mb-2 flex-1 space-y-2 overflow-y-auto">
        {messages.map((m) => (
          <ChatBubble key={m.id} text={m.text} from={m.from} />
        ))}
        {loading && (
          <div className="flex justify-center p-2">
            <Loader2 className="size-6 animate-spin" />
          </div>
        )}
      </div>
      <MessageInput onSend={sendMessage} />
    </main>
  );
}
