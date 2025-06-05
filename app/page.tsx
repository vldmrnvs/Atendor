"use client";
import Link from 'next/link';

import { FlickeringGrid } from '@/components/magicui/flickering-grid';
import { BentoGrid, BentoGridItem } from '@/components/magicui/bento-grid';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { ScrollBasedVelocity } from '@/components/magicui/scroll-based-velocity';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { BoxReveal } from '@/components/magicui/box-reveal';
import {
  AlarmClock,
  UploadCloud,
  Handshake,
  Settings,
  Plug,
  Instagram,
  Youtube,
} from 'lucide-react';
import TikTokIcon from '@/components/icons/TikTok';

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
              Build your own chatbot in seconds with Atendor.
            </TypingAnimation>
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

      {/* Scroll headline */}
      <section className="overflow-hidden py-16">
        <ScrollBasedVelocity className="text-center" defaultVelocity={3}>
          Build your bot agent in seconds
        </ScrollBasedVelocity>
      </section>

      {/* Footer */}
      <footer className="footer bg-base-200 text-base-content">
        <div className="container mx-auto grid grid-cols-1 items-center justify-between gap-4 py-6 md:grid-cols-2">
          <p className="justify-self-start">© Atendor 2025 – All rights reserved</p>
          <nav className="justify-self-end flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="link-hover link">
              Privacy Policy
            </Link>
            <Link href="/terms" className="link-hover link">
              Terms
            </Link>
            <Link href="https://instagram.com" className="link-hover" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://tiktok.com" className="link-hover" aria-label="TikTok">
              <TikTokIcon className="h-5 w-5" />
            </Link>
            <Link href="https://youtube.com" className="link-hover" aria-label="YouTube">
              <Youtube className="h-5 w-5" />
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
