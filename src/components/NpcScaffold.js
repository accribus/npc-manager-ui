import { React, useEffect } from 'react';
import NpcRow from './NpcRow';

const NpcScaffold = ({ npcs, setNpcs }) => {
  // Split the NPCs array into groups of three
  const rows = [];
  for (let i = 0; i < npcs.length; i += 3) {
    rows.push(npcs.slice(i, i + 3));
  }

  console.log("rows",rows);
  //for testing
  useEffect(() => {
    console.log('npcs have been updated (useEffect):', npcs);
  }, [npcs]); // This will log the npcs array every time it is updated

  return (
    <div className="npc-scaffold">
      <h2>NPC List</h2>
      {rows.map((npcs, index) => (
        <NpcRow key={index} npcs={npcs} setNpcs={setNpcs} />
      ))}
    </div>
  );
};

export default NpcScaffold;
