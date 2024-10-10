import React from 'react';
import NpcTrait from './NpcTrait';

const traits = [];

// addTrait = ({trait}) => {
//   traits.push(trait);
//   console.log("trait",trait);
//   //      <button onClick={addTrait}>Add New Trait</button>

// }


const NpcCard = ({ npc }) => {
  return (
    <div className="npc-card">
      <h2>NPC: {npc.name}</h2>
      <button onClick={console.log('test')}>Add New Trait</button>
      <NpcTrait trait={npc.trait} ></NpcTrait>
    </div>
  );
};

export default NpcCard;
