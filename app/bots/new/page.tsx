'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function NewBot() {
  const [name, setName] = useState('');
  const [purpose, setPurpose] = useState('');
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
  }

  return (
    <main className="container mx-auto max-w-xl space-y-4 p-4">
      <h1 className="text-2xl font-bold">Crear Bot</h1>
      <div className="form-control w-full space-y-2">
        <input
          type="text"
          placeholder="Nombre"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Propósito"
          className="textarea textarea-bordered w-full"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSave}>
          Guardar
        </button>
        {saved && (
          <div className="alert alert-success shadow-lg">
            <span>Bot guardado (simulado)</span>
          </div>
        )}
      </div>
      <Link href="/bots" className="link">
        Volver a bots
      </Link>
    </main>
  );
}
