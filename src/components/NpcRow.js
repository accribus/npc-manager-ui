// src/components/NpcRow.js
import React from 'react';
import NpcCard from './NpcCard';

const NpcRow = ({ npcs, setNpcs}) => {
  return (
    <div className="npc-row">
      {npcs.map((npc, index) => (
        <NpcCard key={index} npc={npc} npcs={npcs} setNpcs={setNpcs} />
      ))}
    </div>
  );
};

export default NpcRow;
