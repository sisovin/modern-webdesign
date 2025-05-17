import React from 'react';

interface SecondaryButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ onClick, children, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-gray-500 text-white py-2 px-4 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
