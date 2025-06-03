export default function ChatBubble({ text, from }: { text: string; from: 'user' | 'bot' }) {
  return (
    <div className={`chat-bubble ${from === 'user' ? 'chat-end' : 'chat-start'}`}>{text}</div>
  );
}
