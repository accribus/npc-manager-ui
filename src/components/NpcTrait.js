import React from 'react';

const NpcTrait = ({ data }) => {
  return (
    <div className="npc-trait">
      <p>Trait: {data.name}</p>
      <p>Rating: {data.rating}</p>
    </div>
  );
};

export default NpcTrait;