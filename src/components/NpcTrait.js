import React from 'react';

const NpcTrait = ({ trait }) => {
  return (
    <div className="npc-trait">
      <p>Trait: {trait.name}</p>
      <p>Rating: {trait.rating}</p>
    </div>
  );
};

export default NpcTrait;