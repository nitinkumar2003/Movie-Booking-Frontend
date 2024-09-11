// src/components/ui/button.js
import React from 'react';

const Button = ({ variant = 'solid', size = 'md', children, className, ...props }) => {
  const variantClasses = {
    solid: 'bg-blue-500 text-white',
    outline: 'border border-blue-500 text-blue-500',
  };

  const sizeClasses = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4',
    lg: 'py-3 px-6 text-lg',
  };

  return (
    <button
      className={`rounded-md ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
