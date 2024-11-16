import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  className?: string;
}>;

export const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className,
}: ButtonProps) => {
  // Define the variant classes
  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
  };

  // Define the size classes
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${variantClasses[variant]} ${sizeClasses[size]} text-white rounded-md focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};
