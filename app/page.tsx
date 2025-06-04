import Link from 'next/link';
import { FlickeringGrid } from '@/components/magicui/flickering-grid';
import { TextReveal } from '@/components/magicui/text-reveal';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="hero relative flex-1 bg-base-200 py-20">
        <FlickeringGrid />
        <div className="hero-content text-center relative z-10">
          <div className="max-w-md space-y-4">
            <h1 className="text-5xl font-bold">Atendor</h1>
            <p className="py-2 text-lg">
              Crea asistentes de IA personalizados para tu negocio
            </p>
            <Link href="/signup" className="btn btn-primary">
              Comienza gratis
            </Link>
          </div>
        </div>
      </section>

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
      </footer>
    </main>
  );
}
