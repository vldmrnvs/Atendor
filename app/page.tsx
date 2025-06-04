"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FlickeringGrid } from '@/components/magicui/flickering-grid';
import { BentoGrid, BentoGridItem } from '@/components/magicui/bento-grid';
import {
  AlarmClock,
  UploadCloud,
  Handshake,
  Settings,
  Plug,
} from 'lucide-react';

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="hero relative flex-1 overflow-hidden bg-base-200 py-20">
        <FlickeringGrid className="absolute inset-0 -z-10 opacity-20" />
        <div className="relative z-10 hero-content text-center">
          <div className="max-w-md space-y-4">
            <h1 className="text-5xl font-bold">Atendor</h1>
            <p className="py-2 text-lg">
              Create personalized AI assistants for your business
            </p>
            <Link href="/signup" className="btn btn-primary">
              Get started free
            </Link>
          </div>
        </div>
      </section>

      <div className="my-16 px-4">
        <BentoGrid>
          <BentoGridItem
            className="sm:col-span-2 sm:row-span-2"
            title="Serve clients 24/7"
            description="Let your assistant respond at any time"
            icon={<AlarmClock />}
          />
          <BentoGridItem
            title="Train your assistant in seconds"
            description="Upload docs or links and you're done"
            icon={<UploadCloud />}
          />
          <BentoGridItem
            title="Tailored support"
            description="Your assistant learns your tone"
            icon={<Handshake />}
          />
          <BentoGridItem
            className="sm:col-span-2"
            title="No coding required"
            description="Setup easily with our dashboard"
            icon={<Settings />}
          />
          <BentoGridItem
            title="Seamless integrations"
            description="Connect to your site with one script"
            icon={<Plug />}
          />
        </BentoGrid>
      </div>

      {/* How it works */}
      <section className="container mx-auto my-16 px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">¿Cómo funciona?</h2>
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
          <div className="step step-primary" data-content="1">
            Regístrate y crea tu bot
          </div>
          <div className="step step-primary" data-content="2">
            Entrena con tu contenido
          </div>
          <div className="step step-primary" data-content="3">
            Chatea y obtén respuestas
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="container mx-auto mb-16 px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Casos de uso</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title">Autónomos</h3>
              <p>Automatiza respuestas y agenda con tus clientes.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title">Tiendas</h3>
              <p>Aumenta tus ventas con atención 24/7.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title">Consultores</h3>
              <p>Resuelve dudas frecuentes de manera instantánea.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center bg-base-200 p-4">
        <nav className="grid grid-flow-col gap-4">
          <Link href="/login" className="link-hover link">
            Ingresar
          </Link>
          <Link href="/signup" className="link-hover link">
            Registro
          </Link>
          <Link href="/dashboard" className="link-hover link">
            Dashboard
          </Link>
        </nav>
        <button
          className="btn btn-sm"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? 'Dark' : 'Light'} mode
        </button>
      </footer>
    </main>
  );
}
