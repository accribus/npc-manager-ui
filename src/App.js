// src/App.js
import React, { useState } from 'react';
import NpcScaffold from './components/NpcScaffold';
import './index.css';

const App = () => {
  const [npcs, setNpcs] = useState([
    { name: 'Goblin', health: 30, strength: 5, agility: 10, trait:{
        name: "test trait name",
        rating: 4
    } },
    { name: 'Orc', health: 60, strength: 8, agility: 6 },
    { name: 'Troll', health: 90, strength: 12, agility: 4 },
    { name: 'Elf', health: 40, strength: 6, agility: 12 },
    { name: 'Dwarf', health: 70, strength: 9, agility: 5 },
    { name: 'Dragon', health: 150, strength: 20, agility: 8 },
  ]);

  const addNpc = () => {
    const newNpc = { name: 'New NPC', health: 50, strength: 7, agility: 5 };
    setNpcs([...npcs, newNpc]);
  };

  return (
    <div className="App">
      <h1>NPC Character Stats</h1>
      <button onClick={addNpc}>Add New NPC</button>
      <NpcScaffold npcs={npcs} />
    </div>
  );
};

export default App;
