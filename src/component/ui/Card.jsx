// src/components/ui/Card.js
import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default Card;
