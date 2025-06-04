# Atendor

Atendor is a modern SaaS platform for creating personal AI assistants.

## Features
- Supabase authentication and storage
- DaisyUI styled components with TailwindCSS
- Simple bot creation and training
- Chat interface with Context7 memory

## Getting Started
1. Install dependencies
   ```bash
   npm install
   ```
2. Copy the example env file and configure your variables
   ```bash
   cp .env.example .env.local
   ```
   `.env.example` includes:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=
   NEXT_PUBLIC_SUPABASE_ANON_KEY=
   SUPABASE_SERVICE_ROLE_KEY=
   OPENAI_API_KEY=
   CONTEXT7_API_KEY=
   OPENROUTER_API_KEY=
   ```
3. Run the development server
   ```bash
   npm run dev
   ```
4. Lint the project
   ```bash
   npm run lint
   ```

## Project Structure
- `app/` – Next.js routes and pages
- `components/` – Shared React components
- `lib/` – Supabase and memory helpers

This is an early version; contributions are welcome!
