# Atendor

Atendor is a modern SaaS platform for creating personal AI assistants.

## Features
- Supabase authentication and storage
- DaisyUI styled components with TailwindCSS
- Simple bot creation and training
- Chat interface with Context7 memory (falls back to MagicMCP)

## Getting Started
This project uses **pnpm** for package management. Install it globally if you
haven't already:
```bash
npm i -g pnpm
```
1. Install dependencies
   ```bash
   pnpm install
   ```
2. Copy `.env.example` to `.env.local` and configure your environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and provide values for:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=
   NEXT_PUBLIC_SUPABASE_ANON_KEY=
   SUPABASE_SERVICE_ROLE_KEY=
   OPENAI_API_KEY=
   CONTEXT7_API_KEY=
   OPENROUTER_API_KEY=
   ```
   `CONTEXT7_API_KEY` is used by the memory helpers to store and retrieve
   conversations. When Context7 is unavailable, the helpers automatically
   fall back to MagicMCP.
3. Run the development server
   ```bash
   pnpm dev
   ```
4. Lint the project
   ```bash
   pnpm lint
   ```

## Project Structure
- `app/` – Next.js routes and pages
- `components/` – Shared React components
- `lib/` – Supabase and memory helpers

This is an early version; contributions are welcome!
