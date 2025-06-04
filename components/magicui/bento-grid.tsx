"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode, HTMLAttributes } from "react";

export interface BentoGridProps extends HTMLAttributes<HTMLDivElement> {}

export function BentoGrid({ className, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
      {...props}
    />
  );
}

export interface BentoGridItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
  cta?: string;
}

export function BentoGridItem({
  title,
  description,
  icon,
  href,
  cta = "Learn more",
  className,
  ...props
}: BentoGridItemProps) {
  const content = (
    <div
      className={cn(
        "flex h-full flex-col justify-between overflow-hidden rounded-xl bg-base-100 p-6 shadow",
        className,
      )}
      {...props}
    >
      {icon && <div className="text-4xl">{icon}</div>}
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-base-content/70">{description}</p>
      {href && (
        <Link href={href} className="btn btn-sm btn-ghost w-max">
          {cta}
          <ArrowRight className="ms-1 h-4 w-4" />
        </Link>
      )}
    </div>
  );
  return content;
}
