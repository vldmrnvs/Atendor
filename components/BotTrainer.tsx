"use client";

import { useState, FormEvent } from 'react';

export default function BotTrainer() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/train", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (res.ok) {
        setStatus("success");
        setText("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="Paste training text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
        {status === "loading" ? "Training..." : "Train"}
      </button>
      {status === "success" && (
        <p className="text-success">Training uploaded successfully!</p>
      )}
      {status === "error" && (
        <p className="text-error">Failed to upload training text.</p>
      )}
    </form>
  );
}
