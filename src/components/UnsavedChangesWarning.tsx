import React from 'react';
import { AlertCircle } from 'lucide-react';

export const UnsavedChangesWarning = () => {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-full animate-bounce-gentle">
      <AlertCircle size={16} className="text-amber-600" />
      <span className="text-sm font-medium text-amber-700">
        You have unsaved changes
      </span>
    </div>
  );
};