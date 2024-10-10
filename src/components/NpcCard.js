import React, { useState } from 'react';
import NpcTrait from './NpcTrait';

const NpcCard = ({ npc }) => {
  // Local state for traits specific to this NpcCard
  const [traits, setTraits] = useState([]);
  let counter = 0;

  // Function to add a new trait to the traits array
  const addTrait = () => {
    console.log('The add trait button was clicked!');
    const newTrait = {
      name: "trait" + counter,
      rating: 5
    };

    counter++;

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
    </div>
  );
};

export default NpcCard;
