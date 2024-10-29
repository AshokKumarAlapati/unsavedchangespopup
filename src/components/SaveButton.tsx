import React from 'react';
import { Save } from 'lucide-react';

interface SaveButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export const SaveButton = ({ onClick, disabled }: SaveButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg text-white
        transition-all duration-200 transform
        ${disabled 
          ? 'bg-gray-400 cursor-not-allowed opacity-50' 
          : 'bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95'
        }
      `}
    >
      <Save size={18} className={disabled ? '' : 'animate-pulse'} />
      Save Changes
    </button>
  );
};