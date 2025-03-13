// components/ui/card.jsx
import React from 'react';

const Card = ({ children, className, ...props }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className, ...props }) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};
export { Card, CardContent }; // Correct: Named exports