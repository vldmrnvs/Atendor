"use client";

import { useEffect, useState } from 'react';
import BotCard from '@/components/BotCard';
import { supabase } from '@/lib/supabase';
import type { Bot } from '@/types/bot';

export default function Bots() {
  const [bots, setBots] = useState<Bot[]>([]);
  const [name, setName] = useState('');
  const [personality, setPersonality] = useState('');
  const [purpose, setPurpose] = useState('');

  useEffect(() => {
    async function loadBots() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase
        .from('bots')
        .select('*')
        .eq('user_id', user.id);
      if (data) setBots(data as Bot[]);
    }
    loadBots();
  }, []);

  async function createBot() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    const { data, error } = await supabase
      .from('bots')
      .insert({ name, personality, purpose, user_id: user.id })
      .select()
      .single();
    if (!error && data) {
      setBots([...bots, data as Bot]);
      setName('');
      setPersonality('');
      setPurpose('');
    }
  }

  return (
    <div className="max-w-xl mx-auto space-y-4 p-4">
      <form
        className="space-y-2"
        onSubmit={(e) => {
          e.preventDefault();
          createBot();
        }}
      >
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Personality"
          value={personality}
          onChange={(e) => setPersonality(e.target.value)}
        />
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Purpose"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Create Bot
        </button>
      </form>
      <div className="grid gap-4">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
    </div>
  );
}
