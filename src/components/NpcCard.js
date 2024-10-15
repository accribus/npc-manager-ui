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

  const onSave = (newTrait) => {
    const updatedNpcs = npcs.map((currentNpc) => {
      if (currentNpc.id === npc.id) {
        // Create a new traits array by appending the new trait immutably
        const updatedTraits = [...currentNpc.traits, { ...newTrait }];
        
        // Return a new NPC object with the updated traits, ensuring immutability
        return { ...currentNpc, traits: updatedTraits };
      }
      return currentNpc; // Unmodified NPC
    });
  
    setNpcs(updatedNpcs); // Update state immutably
  };
  
  
  
  
  const addTrait2 = (newTrait) => {
    const updatedNpcs = npcs.map((currentNpc) => {
      if (currentNpc.name === npc.name) {
        const updatedTraits = [...currentNpc.traits, newTrait];
        return { ...currentNpc, traits: updatedTraits };
      }
      return currentNpc;
    });
  
    // Update the state with the updated npcs array
    setNpcs(updatedNpcs);  // Removed the logging here
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
          onSave={onSave} // Pass the addTrait function to save new trait
        />
      )}
    </div>
  );
};

export default NpcCard;
