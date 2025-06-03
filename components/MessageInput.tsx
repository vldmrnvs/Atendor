export default function MessageInput() {
  return (
    <form className="flex gap-2">
      <input type="text" placeholder="Type a message" className="input input-bordered flex-1" />
      <button type="submit" className="btn btn-primary">Send</button>
    </form>
  );
}
