import React from 'react';

interface PillProps {
  label: string;
}

const Pill: React.FC<PillProps> = ({ label }) => {
  return (
    <button className="flex-shrink-0 bg-gray-200 text-gray-800 text-sm font-semibold py-2 px-4 rounded-full hover:bg-gray-300 transition-colors duration-200">
      {label}
    </button>
  );
};

export default Pill;
