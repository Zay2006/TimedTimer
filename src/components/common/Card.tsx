import React from "react";

interface CardProps {
  children: React.ReactNode;
}

/**
 * Card component for layout
 * @param {React.ReactNode} children - The content to be displayed inside the card
 * @returns {JSX.Element} The Card component
 */
const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="bg-white shadow-md rounded-lg p-6">{children}</div>;
};

export default Card;
