import React from "react";

type InputProps = {
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "email" | "number";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export const Input = ({
  label,
  placeholder = "Enter text",
  type = "text",
  value,
  onChange,
  className = "",
}: InputProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
