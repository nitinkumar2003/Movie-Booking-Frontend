// src/components/ui/button.js
import React from 'react';

const Button = ({ size = 'md', variant = 'primary', children, className, ...props }) => {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none";
    const sizeStyles = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };
    const variantStyles = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    };

    return (
        <button
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
