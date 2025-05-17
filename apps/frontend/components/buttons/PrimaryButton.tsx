import React from 'react';

interface PrimaryButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, children, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-blue-500 text-white py-2 px-4 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
