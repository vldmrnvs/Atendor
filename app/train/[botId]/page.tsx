'use client';
import { useState } from 'react';
import { mockBots } from '@/lib/mock/bots';
import { notFound } from 'next/navigation';

export default function TrainBot({ params }: { params: { botId: string } }) {
  const [text, setText] = useState('');
  const [trainingData, setTrainingData] = useState<string[]>([]);
  const bot = mockBots.find((b) => b.id === params.botId);
  if (!bot) return notFound();

  function saveTraining() {
    if (text.trim()) {
      setTrainingData((prev) => [...prev, text]);
      setText('');
    }
  }

  return (
    <main className="container mx-auto max-w-xl space-y-6 p-4">
      <h1 className="text-2xl font-bold">Entrenar {bot.name}</h1>
      <textarea
        className="textarea textarea-bordered w-full"
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Pega tu contenido aqui"
      />
      <button className="btn btn-primary" onClick={saveTraining}>
        Guardar entrenamiento
      </button>
      <div className="space-y-2">
        {trainingData.map((t, i) => (
          <p key={i} className="rounded bg-base-200 p-2 text-sm">
            {t}
          </p>
        ))}
      </div>
    </main>
  );
}
