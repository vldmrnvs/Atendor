"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import React from "react";

import { cn } from "@/lib/utils";

export const ModeToggle = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'> & { className?: string }
>(({ className, ...props }, ref) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800",
        className,
      )}
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      {...props}
    >
      <SunIcon className="size-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden size-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
    </button>
  );
});

ModeToggle.displayName = "ModeToggle";
