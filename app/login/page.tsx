'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { MagicCard } from '@/components/magicui/magic-card';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError('Credenciales inválidas');
      return;
    }
    router.push('/dashboard');
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <MagicCard className="max-w-md w-full p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="input input-bordered w-full"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input input-bordered w-full"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/signup">
            <ShimmerButton className="px-6 py-3">Get started free</ShimmerButton>
          </Link>
        </div>
      </MagicCard>
    </main>
  );
}
