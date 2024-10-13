// src/components/TraitModal.js
import React, { useState } from 'react';

const TraitModal = ({ onClose, onSave }) => {
  const [traitName, setTraitName] = useState('');
  const [traitRating, setTraitRating] = useState(0);
  const [traitNotes, setTraitNotes] = useState('');

  const handleSave = () => {
    const newTrait = { traitName, traitRating, notes: traitNotes }; // Match NPC trait structure
    onSave(newTrait); // Pass the new trait back to NpcCard
    onClose(); // Close the modal
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Trait</h2>
        <label>
          Name:
          <input
            type="text"
            value={traitName}
            onChange={(e) => setTraitName(e.target.value)}
            placeholder="Enter trait name"
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            value={traitRating}
            onChange={(e) => setTraitRating(Number(e.target.value))}
            min="0"
            max="10"
            placeholder="Rate from 1 to 10"
          />
        </label>
        <label>
          Notes:
          <textarea
            value={traitNotes}
            onChange={(e) => setTraitNotes(e.target.value)}
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
