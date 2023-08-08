import React from 'react';

function ConfirmationModal({ isOpen, onCancel, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>You have unsaved changes. Do you want to continue without saving?</p>
        <div className="modal-buttons">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onConfirm}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
