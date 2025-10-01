// src/components/ui/Modal.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

/** Merge utility (хэрвээ та utils/cn ашигладаг бол орлуулж болно) */
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ModalSize = "sm" | "md" | "lg" | "xl" | "full";

export type ModalProps = {
  /** Нээлттэй эсэх */
  open: boolean;
  /** Хаах үйлдэл */
  onClose: () => void;
  /** Гарчиг (aria-labelledby) */
  title?: React.ReactNode;
  /** Tailwind class нэмэх */
  className?: string;
  /** Дотор талын өргөн */
  size?: ModalSize;
  /** ESC дээр хаах */
  closeOnEsc?: boolean;
  /** Backdrop дээр дарж хаах */
  closeOnOutside?: boolean;
  /** Backdrop-ийн өнгө ба blur */
  backdropClassName?: string;
  /** Анхны фокус авах элемент */
  initialFocusRef?: React.RefObject<HTMLElement>;
  /** Контент */
  children?: React.ReactNode;
};

const sizeMap: Record<ModalSize, string> = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  full: "w-[96vw] h-[92vh] max-w-none",
};

export const Modal: React.FC<ModalProps> & {
  Header: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Body: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Footer: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Title: React.FC<React.HTMLAttributes<HTMLHeadingElement>>;
  Description: React.FC<React.HTMLAttributes<HTMLParagraphElement>>;
} = ({
  open,
  onClose,
  title,
  className,
  size = "md",
  closeOnEsc = true,
  closeOnOutside = true,
  backdropClassName,
  initialFocusRef,
  children,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  // Body scroll lock
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open || !closeOnEsc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, closeOnEsc, onClose]);

  // Focus management (restore focus, initialFocus)
  useEffect(() => {
    if (open) {
      lastActiveRef.current = document.activeElement as HTMLElement;
      const el =
        initialFocusRef?.current ??
        dialogRef.current?.querySelector<HTMLElement>("[data-autofocus]") ??
        dialogRef.current!;
      // focus after next paint
      requestAnimationFrame(() => el?.focus?.());
    } else {
      lastActiveRef.current?.focus?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  const modal = (
    <div
      aria-modal="true"
      role="dialog"
      aria-labelledby={title ? "modal-title" : undefined}
      className="fixed inset-0 z-[1000] flex items-center justify-center"
    >
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity",
          backdropClassName
        )}
        onClick={() => closeOnOutside && onClose()}
      />

      {/* Panel */}
      <div
        ref={dialogRef}
        className={cn(
          "relative mx-auto w-[90vw] max-w-full rounded-2xl bg-white p-0 shadow-xl outline-none",
          "dark:bg-zinc-900",
          sizeMap[size],
          // enter animation
          "animate-in fade-in zoom-in-95 duration-150",
          className
        )}
        tabIndex={-1}
      >
        {/* Close button (X) */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 dark:hover:bg-white/10 dark:focus-visible:ring-white/60"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5">
            <path
              d="M6 6l12 12M6 18L18 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="flex max-h-[85vh] flex-col overflow-hidden">
          {title ? (
            <div className="border-b border-gray-100 p-5 dark:border-zinc-800">
              <h2 id="modal-title" className="text-lg font-semibold">
                {title}
              </h2>
            </div>
          ) : null}
          <div className="overflow-auto p-5">{children}</div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

// Sub-components
Modal.Header = ({ className, ...props }) => (
  <div
    className={cn(
      "border-b border-gray-100 p-5 dark:border-zinc-800",
      className
    )}
    {...props}
  />
);

Modal.Body = ({ className, ...props }) => (
  <div className={cn("p-5 overflow-auto", className)} {...props} />
);

Modal.Footer = ({ className, ...props }) => (
  <div
    className={cn(
      "flex items-center justify-end gap-2 border-t border-gray-100 p-4 dark:border-zinc-800",
      className
    )}
    {...props}
  />
);

Modal.Title = ({ className, ...props }) => (
  <h2
    id="modal-title"
    className={cn("text-lg font-semibold leading-6", className)}
    {...props}
  />
);

Modal.Description = ({ className, ...props }) => (
  <p
    className={cn("mt-1 text-sm text-gray-600 dark:text-zinc-300", className)}
    {...props}
  />
);

Modal.displayName = "Modal";
