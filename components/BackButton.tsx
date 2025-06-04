"use client";
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { ShineBorder } from '@/components/magicui/shine-border';
import { cn } from '@/lib/utils';

export default function BackButton({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <div className={cn('relative', className)}>
      <ShineBorder className="rounded-md" shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <button
        onClick={() => router.back()}
        className="btn btn-ghost btn-sm relative z-10 flex items-center gap-1"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>
    </div>
  );
}
