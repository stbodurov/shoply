import React, { useState } from 'react';
import './styles.scss';

const AddModal = ({ hideModal, toggleModal, children }) => {
  if (hideModal) return null;

  return (
    <>
      <div className="modalOverlay" onClick={() => toggleModal()} />
      <div className="addModal">
        {children}
      </div>
    </>
  );
}

export default AddModal;