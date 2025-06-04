# Atendor

Atendor is a modern SaaS platform for creating personal AI assistants.

## Features
- Supabase authentication and storage
- DaisyUI styled components with TailwindCSS
- Simple bot creation and training
- Chat interface with Context7 memory

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
2. Configure environment variables in `.env.local`:
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
