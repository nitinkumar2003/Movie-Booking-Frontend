// src/components/ui/CardContent.js
import React from 'react';

const CardContent = ({ children, className }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

export default CardContent;
