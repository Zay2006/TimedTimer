// filepath: /c:/Users/iwrig/Projects/TimedTimer-1/src/components/common/Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      {children}
    </div>
  );
};

export default Card;