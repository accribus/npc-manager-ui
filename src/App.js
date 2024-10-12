// src/App.js
import React, { useState } from 'react';
import NpcScaffold from './components/NpcScaffold';
import './index.css';

const App = () => {
  const [npcs, setNpcs] = useState([
    { name: 'Elf', trait:{
        name: "elf trait",
        rating: 4,
        traits: []
    }  },
    { name: 'Dwarf', trait:{
        name: "dwarf trait",
        rating: 4,
        traits: []
    }  },
    { name: 'Dragon', trait:{
        name: "dragon trait",
        rating: 4,
        traits: []
    }  },
  ]);

  const addNpc = () => {
    const newNpc = { name: 'New NPC', health: 50, strength: 7, agility: 5, trait:{
        name: "generic trait",
        rating: 8
    }  };
    setNpcs([...npcs, newNpc]);
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
