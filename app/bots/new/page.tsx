"use client";
import { useState } from 'react';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

const personalities = ["Friendly", "Professional", "Cheerful", "Serious"];

export default function NewBot() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [purpose, setPurpose] = useState('');
  const [personality, setPersonality] = useState('Friendly');
  const [training, setTraining] = useState('');
  const [avatar, setAvatar] = useState('');
  const [saved, setSaved] = useState(false);

  function next() {
    setStep((s) => Math.min(s + 1, 3));
  }
  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }
  function handleSave() {
    setSaved(true);
  }

  return (
    <main className="container mx-auto max-w-xl space-y-4 p-4">
      <h1 className="text-2xl font-bold">Crear Bot</h1>
      <ul className="steps w-full text-sm">
        <li className={`step ${step >= 0 ? 'step-primary' : ''}`}>Info</li>
        <li className={`step ${step >= 1 ? 'step-primary' : ''}`}>Personalidad</li>
        <li className={`step ${step >= 2 ? 'step-primary' : ''}`}>Entrenamiento</li>
        <li className={`step ${step >= 3 ? 'step-primary' : ''}`}>Avatar</li>
      </ul>

      {step === 0 && (
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Nombre del bot"
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
        </div>
      )}

      {step === 1 && (
        <div className="space-y-2">
          <select
            className="select select-bordered w-full"
            value={personality}
            onChange={(e) => setPersonality(e.target.value)}
          >
            {personalities.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-2">
          <textarea
            className="textarea textarea-bordered w-full"
            rows={6}
            value={training}
            onChange={(e) => setTraining(e.target.value)}
            placeholder="Pega o escribe texto para entrenar"
          />
        </div>
      )}

      {step === 3 && (
        <div className="space-y-2">
          <input
            type="text"
            placeholder="URL de avatar o emoji"
            className="input input-bordered w-full"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>
      )}

      {saved && (
        <div className="alert alert-success shadow-lg">
          <span>Bot guardado (simulado)</span>
        </div>
      )}

      <div className="flex justify-between pt-4">
        {step > 0 && (
          <button onClick={back} className="btn">
            Atras
          </button>
        )}
        {step < 3 ? (
          <ShimmerButton onClick={next}>Siguiente</ShimmerButton>
        ) : (
          <ShimmerButton onClick={handleSave}>Guardar</ShimmerButton>
        )}
      </div>
    </main>
  );
}
