import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg text-center">
      {children}
    </div>
  );
};

export default Card;
