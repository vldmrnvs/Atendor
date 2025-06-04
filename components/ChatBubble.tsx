import { motion } from 'motion/react';

export default function ChatBubble({
  text,
  from,
}: {
  text: string;
  from: 'user' | 'bot';
}) {
  return (
    <div className={`chat ${from === 'user' ? 'chat-end' : 'chat-start'}`}>
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        className="chat-bubble"
      >
        {text}
      </motion.div>
    </div>
  );
}
