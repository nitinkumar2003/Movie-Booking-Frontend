import React from 'react';

const Button = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = 'px-4 py-2 font-semibold text-white rounded focus:outline-none';
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-700',
    secondary: 'bg-gray-500 hover:bg-gray-700',
    danger: 'bg-red-500 hover:bg-red-700',
    link: 'bg-transparent text-blue-500 hover:text-blue-700',
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
