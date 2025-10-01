// src/components/ui/Button.tsx
"use client";

import React, { forwardRef } from "react";
import Link from "next/link";

/** Utility: merge class names */
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive"
  | "link";

type ButtonSize = "sm" | "md" | "lg" | "icon";

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-black text-white hover:bg-black/90 focus-visible:ring-black dark:bg-white dark:text-black dark:hover:bg-white/90 dark:focus-visible:ring-white",
  secondary:
    "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-300 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 dark:focus-visible:ring-zinc-600",
  outline:
    "border border-gray-300 text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-300 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800",
  ghost:
    "bg-transparent text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-300 dark:text-zinc-100 dark:hover:bg-zinc-800",
  destructive:
    "bg-red-600 text-white hover:bg-red-500 focus-visible:ring-red-600",
  link:
    "bg-transparent p-0 h-auto text-blue-600 hover:underline focus-visible:ring-blue-600 dark:text-blue-400",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 rounded-lg px-3 text-sm",
  md: "h-10 rounded-xl px-4 text-sm",
  lg: "h-12 rounded-2xl px-6 text-base",
  icon: "h-10 w-10 rounded-xl p-0",
};

type CommonProps = {
  /** Visual variant */
  variant?: ButtonVariant;
  /** Size */
  size?: ButtonSize;
  /** Full width */
  fullWidth?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Left icon */
  leftIcon?: React.ReactNode;
  /** Right icon */
  rightIcon?: React.ReactNode;
  /** Extra classes */
  className?: string;
  /** Data-testid for tests */
  "data-testid"?: string;
  /** Children */
  children?: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    as?: "button";
  };

type ButtonAsAnchor = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href"> & {
    as: "a";
    href: string;
    /** Use next/link when true (recommended for internal routes) */
    useNextLink?: boolean;
    prefetch?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      as = "button",
      variant = "primary",
      size = "md",
      fullWidth,
      loading,
      leftIcon,
      rightIcon,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const classes = cn(
      base,
      variants[variant],
      sizes[size],
      fullWidth && "w-full",
      loading && "relative",
      className
    );

    const content = (
      <>
        {/* Spinner */}
        {loading && (
          <svg
            className={cn(
              "animate-spin",
              size === "sm" ? "h-4 w-4" : "h-5 w-5"
            )}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}

        {/* Left Icon */}
        {!loading && leftIcon}

        {/* Label */}
        <span className="whitespace-nowrap">{children}</span>

        {/* Right Icon */}
        {!loading && rightIcon}
      </>
    );

    if (as === "a") {
      const { href, useNextLink = true, prefetch, ...anchorProps } = rest as ButtonAsAnchor;
      if (useNextLink) {
        return (
          <Link
            href={href}
            prefetch={prefetch}
            className={classes}
            {...anchorProps}
            ref={ref as React.Ref<HTMLAnchorElement>}
          >
            {content}
          </Link>
        );
      }
      return (
        <a
          href={href}
          className={classes}
          {...anchorProps}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {content}
        </a>
      );
    }

    const btnProps = rest as ButtonAsButton;
    return (
      <button
        {...btnProps}
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        disabled={btnProps.disabled || loading}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
