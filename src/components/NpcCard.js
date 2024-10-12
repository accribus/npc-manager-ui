// src/components/NpcCard.js
import React, { useState } from 'react';
import NpcTrait from './NpcTrait';
import TraitModal from './TraitModal';

const NpcCard = ({ npc, npcs, setNpcs }) => {
  const [traits, setTraits] = useState([]);
  const [notes, setNotes] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const addTrait = (newTrait) => {
    // Update the specific NPC's traits
    const updatedNpcs = npcs.map((n) => {
      if (n.name === npc.name) {
        return { ...n, trait: newTrait, notes: notes };
      }
      return n;
    });
    console.log('trait added: ', npcs);
    setNpcs(updatedNpcs);
  };

  return (
    <div className="npc-card">
      <h2>NPC: {npc.name}</h2>
      <button onClick={openModal}>Add New Trait</button>

      <div>
        <NpcTrait trait={npc.trait} />
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
          onSave={addTrait}
        />
      )}
    </div>
  );
};

export default NpcCard;
