// components/ui/input.jsx (o input.tsx si usas TypeScript)
import React from "react";

const Input = ({ type, placeholder, className, ...props }) => {
  return (
    <input
      type={type || "text"} // El tipo por defecto es "text"
      placeholder={placeholder}
      className={`py-2 px-4 border rounded-md bg-slate-800 text-slate-200 ${className}`}
      {...props} // Permite pasar otras propiedades como onChange, value, etc.
    />
  );
};

export { Input };
