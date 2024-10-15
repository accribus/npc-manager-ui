// src/App.js
import React, { useState } from 'react';
import NpcScaffold from './components/NpcScaffold';
import './index.css';

const App = () => {
    // const [npcs, setNpcs] = useState([
    //     { id: 1, name: 'Elf', traits: [{ traitName: "magic", traitRating: 3, notes: "" }] },
    //     { id: 2, name: 'Dwarf', traits: [{ traitName: "history", traitRating: 3, notes: "" }] },
    //     { id: 3, name: 'Dragon', traits: [{ traitName: "breath weapon", traitRating: 6, notes: "" }] },
    // ]);


    const [npcs, setNpcs] = useState([]);
      
    const addNpc = () => {
    const newNpc = { 
        id: npcs.length + 1,  // Assign a new unique id
        name: 'Gnome',
        traits: [{
        traitName: "music",
        traitRating: 2,
        notes: "",
        }]
    };
    
    // Add the new NPC without modifying the existing NPCs
    setNpcs(() => [...npcs, newNpc]); // Ensure immutability
    };
      

  return (
    <div className="App">
      <h1>NPC Character Stats</h1>
      <button onClick={addNpc}>Add New NPC</button>
      <NpcScaffold npcs={npcs} setNpcs={setNpcs}/>
    </div>
  );
};

export default App;
