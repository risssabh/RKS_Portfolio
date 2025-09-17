import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "ghost"; // ✅ Add this
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`btn ${variant === "ghost" ? "btn ghost" : "btn"} ${className || ""}`}
    >
      {children}
    </button>
  );
}
