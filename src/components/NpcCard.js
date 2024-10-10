import React from 'react';
import NpcTrait from './NpcTrait';

const NpcCard = ({ npc }) => {
  return (
    <div className="npc-card">
      <h2>NPC: {npc.name}</h2>
    </div>
  );
};

export default NpcCard;
