import React, { useState } from 'react';
import { useUnsavedChangesWarning } from './hooks/useUnsavedChangesWarning';
import { UnsavedChangesWarning } from './components/UnsavedChangesWarning';
import { SaveButton } from './components/SaveButton';
import { Editor } from './components/Editor';
import { Modal } from './components/Modal';

function App() {
  const [text, setText] = useState('');
  const [savedText, setSavedText] = useState('');
  const hasUnsavedChanges = text !== savedText;

  const {
    showModal,
    onBeforeLeavePage,
    handleConfirm,
    handleCancel,
  } = useUnsavedChangesWarning(hasUnsavedChanges);

  const handleSave = () => {
    setSavedText(text);
  };

  const handleNavigateAway = () => {
    onBeforeLeavePage(() => {
      setText('');
      setSavedText('');
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Edit Document</h1>
            {hasUnsavedChanges && <UnsavedChangesWarning />}
          </div>
          
          <Editor value={text} onChange={setText} />
          
          <div className="flex justify-between items-center">
            <button
              onClick={handleNavigateAway}
              className="text-gray-600 hover:text-gray-800 text-sm font-medium"
            >
              Navigate Away (Demo)
            </button>
            <SaveButton onClick={handleSave} disabled={!hasUnsavedChanges} />
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Type something in the text area above</li>
            <li>• Try to close the tab or refresh the page</li>
            <li>• Click "Navigate Away" to see the modal in action</li>
            <li>• Click the Save button to save your changes</li>
          </ul>
        </div>

        <Modal
          isOpen={showModal}
          onClose={handleCancel}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
}

export default App;