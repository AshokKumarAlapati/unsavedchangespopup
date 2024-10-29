import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export const Modal = ({ isOpen, onClose, onConfirm, onCancel }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6 space-y-6 animate-modal-enter">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Unsaved Changes
          </h2>
          <p className="text-gray-600">
            You have unsaved changes. Are you sure you want to leave? Your changes will be lost.
          </p>
        </div>

        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 
              bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm font-medium text-white 
              bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            Leave anyway
          </button>
        </div>
      </div>
    </div>
  );
};