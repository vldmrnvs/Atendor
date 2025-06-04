export default function ChatBubble({
  text,
  from,
}: {
  text: string;
  from: 'user' | 'bot';
}) {
  return (
    <div className={`chat ${from === 'user' ? 'chat-end' : 'chat-start'}`}>
      <div className="chat-bubble">{text}</div>
    </div>
  );
}
