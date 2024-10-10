import React from 'react';
import NpcRow from './NpcRow';

const NpcScaffold = ({ npcs }) => {
  // Split the NPCs array into groups of three
  const rows = [];
  for (let i = 0; i < npcs.length; i += 3) {
    rows.push(npcs.slice(i, i + 3));
  }

  console.log("rows",rows);

  return (
    <div className="npc-scaffold">
      <h2>NPC List</h2>
      {rows.map((npcGroup, index) => (
        <NpcRow key={index} npcs={npcGroup} />
      ))}
    </div>
  );
};

export default NpcScaffold;
