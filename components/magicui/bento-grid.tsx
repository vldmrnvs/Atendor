"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode, HTMLAttributes } from "react";
import type { HTMLMotionProps } from "framer-motion";

export interface BentoGridProps extends HTMLAttributes<HTMLDivElement> {}

export function BentoGrid({ className, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "mx-auto grid w-full max-w-5xl auto-rows-[18rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
      {...props}
    />
  );
}

export interface BentoGridItemProps extends HTMLMotionProps<"div"> {
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className={cn(
        "flex h-full flex-col justify-between overflow-hidden rounded-xl bg-base-100 p-6 shadow transition-all",
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
    </motion.div>
  );
}
