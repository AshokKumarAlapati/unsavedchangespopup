import { useEffect, useCallback, useState } from 'react';

export const useUnsavedChangesWarning = (hasUnsavedChanges: boolean) => {
  const [showModal, setShowModal] = useState(false);
  const [pendingCallback, setPendingCallback] = useState<(() => void) | null>(null);

  const handleBeforeUnload = useCallback(
    (event: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        event.preventDefault();
        event.returnValue = '';
        return '';
      }
    },
    [hasUnsavedChanges]
  );

  const onBeforeLeavePage = useCallback(
    (callback: () => void) => {
      if (hasUnsavedChanges) {
        setShowModal(true);
        setPendingCallback(() => callback);
        return false;
      }
      return true;
    },
    [hasUnsavedChanges]
  );

  const handleConfirm = useCallback(() => {
    setShowModal(false);
    if (pendingCallback) {
      pendingCallback();
      setPendingCallback(null);
    }
  }, [pendingCallback]);

  const handleCancel = useCallback(() => {
    setShowModal(false);
    setPendingCallback(null);
  }, []);

  useEffect(() => {
    if (hasUnsavedChanges) {
      window.addEventListener('beforeunload', handleBeforeUnload);
      return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }
  }, [hasUnsavedChanges, handleBeforeUnload]);

  return {
    showModal,
    onBeforeLeavePage,
    handleConfirm,
    handleCancel,
  };
};