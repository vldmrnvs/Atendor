"use client";
import Link from 'next/link';

import { FlickeringGrid } from '@/components/magicui/flickering-grid';
import { BentoGrid, BentoGridItem } from '@/components/magicui/bento-grid';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import { ScrollBasedVelocity } from '@/components/magicui/scroll-based-velocity';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { BoxReveal } from '@/components/magicui/box-reveal';
import ThemeToggle from '@/components/ThemeToggle';
import {
  AlarmClock,
  UploadCloud,
  Handshake,
  Settings,
  Plug,
} from 'lucide-react';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="hero relative flex-1 overflow-hidden bg-base-200 py-20">
        <FlickeringGrid className="absolute inset-0 -z-20 opacity-20" />
        <DotPattern className="absolute inset-0 -z-10 text-neutral-400/40" />
        <div className="relative z-10 hero-content text-center">
          <div className="max-w-md space-y-4">
            <TypingAnimation as="h1" className="text-5xl font-bold">
              Atendor
            </TypingAnimation>
            <ScrollBasedVelocity className="py-2 text-lg" defaultVelocity={1}>
              Build your own agent bot in seconds.
            </ScrollBasedVelocity>
            <Link href="/signup">
              <ShimmerButton className="px-6 py-3">Get started free</ShimmerButton>
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
        <BoxReveal width="100%">
          <div>
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
          </div>
        </BoxReveal>
      </section>

      {/* Use cases */}
      <section className="container mx-auto mb-16 px-4">
        <BoxReveal width="100%">
          <div>
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
          </div>
        </BoxReveal>
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
        <ThemeToggle />
      </footer>
    </main>
  );
}
