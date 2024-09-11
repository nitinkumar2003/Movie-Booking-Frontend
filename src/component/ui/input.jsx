// src/components/ui/input.js
import React from 'react';

const Input = ({ type = 'text', placeholder, className, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border rounded-md px-4 py-2 ${className}`}
      {...props}
    />
  );
};

export default Input;
