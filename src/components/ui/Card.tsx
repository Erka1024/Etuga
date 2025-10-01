"use client";

import React from "react";


export type CardVariant = "elevated" | "outline" | "flat";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card-ийн хэв маяг */
  variant?: CardVariant;
  /** Card-ийн толгой хэсэг */
  header?: React.ReactNode;
  /** Card-ийн хөл хэсэг */
  footer?: React.ReactNode;
  /** Card дээр hover эффектийг идэвхжүүлэх */
  hoverable?: boolean;
  /** Card бүрэн өндөр авах эсэх */
  fullHeight?: boolean;
}

/** Tailwind-ийн классуудыг merge хийх жижиг utility */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const Card: React.FC<CardProps> = ({
  variant = "elevated",
  header,
  footer,
  hoverable = false,
  fullHeight = false,
  className,
  children,
  ...props
}) => {
  const variantStyles: Record<CardVariant, string> = {
    elevated:
      "bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow",
    outline:
      "bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800",
    flat: "bg-gray-50 dark:bg-zinc-900",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-4 flex flex-col",
        variantStyles[variant],
        hoverable && "cursor-pointer hover:scale-[1.01] transition-transform",
        fullHeight && "h-full",
        className
      )}
      {...props}
    >
      {header && (
        <div className="mb-3 flex items-center justify-between">{header}</div>
      )}
      <div className="flex-1">{children}</div>
      {footer && <div className="mt-3">{footer}</div>}
    </div>
  );
};

Card.displayName = "Card";
