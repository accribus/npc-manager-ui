import React, { useState } from 'react';
import NpcTrait from './NpcTrait';

//let counter = 0;

const NpcCard = ({ npc }) => {
  // Local state for traits specific to this NpcCard
  const [traits, setTraits] = useState([]);
  const [counter, setCounter] = useState(0);
  

  // Function to add a new trait to the traits array
  const addTrait = () => {
    console.log('The add trait button was clicked!');
    const newTrait = {
      name: "trait" + counter,
      rating: 5
    };

    setCounter(counter => counter + 1);

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
