// src/components/NpcRow.js
import React from 'react';
import NpcCard from './NpcCard';

const NpcRow = ({ npcs }) => {
  return (
    <div className="npc-row">
        <NpcCard></NpcCard>
    </div>
  );
};

export default NpcRow;
