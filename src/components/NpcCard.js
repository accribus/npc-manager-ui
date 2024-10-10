import React from 'react';
import NpcTrait from './NpcTrait';

const traits = [];

let counter = 0;
const addTrait = () => {
  console.log('The add trait button was clicked!');
  
  traits.push({
    name:"trait" + counter,
    rating: 5
  });
  counter++;
  console.log("trait array", traits);
};



const NpcCard = ({ npc }) => {
  return (
    <div className="npc-card">
      <h2>NPC: {npc.name}</h2>
      <button onClick={addTrait}>Add New Trait</button>
      <NpcTrait trait={npc.trait} ></NpcTrait>
    </div>
  );
};

export default NpcCard;
