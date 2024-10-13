// src/components/TraitModal.js
import React, { useState } from 'react';

const TraitModal = ({ onClose, onSave }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [notes, setNotes] = useState('');

  const handleSave = () => {
    const newTrait = { name, rating, notes }; 
    onSave(newTrait);
    onClose();
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
            placeholder="Enter trait name"
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            min="0"
            max="10"
            placeholder="Rate from 1 to 10"
          />
        </label>
        <label>
          Notes:
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows="4"
            cols="50"
            placeholder="Enter notes about this trait"
          />
        </label>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default TraitModal;
