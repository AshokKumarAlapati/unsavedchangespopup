import React from 'react';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const Editor = ({ value, onChange }: EditorProps) => {
  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-64 p-4 border rounded-lg 
          bg-gray-50 focus:bg-white
          border-gray-200 focus:border-blue-500
          focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
          transition-all duration-200
          resize-none"
        placeholder="Start typing..."
      />
      <div className="absolute bottom-3 right-3 text-xs text-gray-400">
        {value.length} characters
      </div>
    </div>
  );
};