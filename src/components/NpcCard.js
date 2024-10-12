import React, { useState } from 'react';
import NpcTrait from './NpcTrait';
import TraitModal from './TraitModal';


const NpcCard = ({ npc }) => {
  // Local state for traits specific to this NpcCard
  const [traits, setTraits] = useState([]);
  const [notes, setNotes] = useState('');
  const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility
  const [counter, setCounter] = useState(0);

  // Function to handle change and validate input for notes
  const handleNotesChange = (e) => {
    const value = e.target.value;
    setNotes(value);
  };

  // Function to show the modal
  const openModal = () => setModalOpen(true);

  // Function to hide the modal
  const closeModal = () => setModalOpen(false);

  // Function to add a new trait to the traits array
  const addTrait = () => {
    openModal();
    console.log('The add trait button was clicked!');
    const newTrait = {
      name: "trait" + counter,
      rating: 5,
    };

    setCounter((counter) => counter + 1);

    // Update the traits state with the new trait
    setTraits([...traits, newTrait]);
    console.log("trait array", traits);
    console.log("counter", counter);
  };

  return (
    <div className="npc-card">
      <h2>NPC: {npc.name}</h2>
      <button onClick={addTrait}>Add New Trait</button>
      <div>
        {traits.map((trait, index) => (
          <NpcTrait key={index} trait={trait} />
        ))}
      </div>
      <div>
        <label>
          Notes:
          <textarea
            value={notes}
            onChange={handleNotesChange} // Corrected this line
            rows="4"
            cols="50"
            placeholder="Enter alphanumeric notes"
          />
        </label>
      </div>
      {isModalOpen && (
        <TraitModal onClose={closeModal} onSave={addTrait} />
      )}
    </div>
  );
};

export default NpcCard;
