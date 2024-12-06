import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`py-2 px-4 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition-colors ${className}`}
      {...props} // Permite pasar otras propiedades como onClick, disabled, etc.
    >
      {children}
    </button>
  );
};

export { Button };
