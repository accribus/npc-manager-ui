// src/components/NpcCard.js
import React, { useState } from 'react';
import NpcTraits from './NpcTraits';
import TraitModal from './TraitModal';

const NpcCard = ({ npc, npcs, setNpcs }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [notes, setNotes] = useState(npc.notes || '');

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const addTrait = (newTrait) => {
    // Update the specific NPC's traits array
    const updatedNpcs = npcs.map((currentNpc) => {
      if (currentNpc.name === npc.name) {
        const updatedTraits = [...currentNpc.traits, newTrait]; // Append new trait
        return { ...currentNpc, traits: updatedTraits }; // Update traits array
      }
      return currentNpc;
    });

    setNpcs(updatedNpcs);  // Update the npcs array with modified NPC
  };

  return (
    <div className="npc-card">
      <h2>NPC: {npc.name}</h2>
      <button onClick={openModal}>Add New Trait</button>

      <div>
        <NpcTraits traits={npc.traits} />
      </div>

      <div>
        <label>
          Notes:
          <textarea
            value={notes}
            onChange={handleNotesChange}
            rows="4"
            cols="50"
            placeholder="Enter notes about this NPC"
          />
        </label>
      </div>

      {isModalOpen && (
        <TraitModal
          onClose={closeModal}
          onSave={addTrait} // Pass the addTrait function to save new trait
        />
      )}
    </div>
  );
};

export default NpcCard;
