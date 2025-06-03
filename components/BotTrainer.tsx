export default function BotTrainer() {
  return (
    <form className="space-y-4">
      <textarea className="textarea textarea-bordered w-full" placeholder="Paste training text" />
      <button type="submit" className="btn btn-primary">Train</button>
    </form>
  );
}
