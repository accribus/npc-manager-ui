// src/components/TraitModal.js
import React, { useState } from 'react';

const TraitModal = ({ onClose, onSave }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);

  const handleSave = () => {
    // Pass the trait data back to the parent component
    onSave({ name, rating });
    onClose(); // Close the modal after saving
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Trait</h2>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          />
        </label>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default TraitModal;
