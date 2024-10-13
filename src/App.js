// src/App.js
import React, { useState } from 'react';
import NpcScaffold from './components/NpcScaffold';
import './index.css';

const App = () => {
  const [npcs, setNpcs] = useState([
    { name: 'Elf', data:{
        name: "elf trait",
        rating: 4,
        traits: []
    }  },
    { name: 'Dwarf', data:{
        name: "dwarf trait",
        rating: 4,
        traits: []
    }  },
    { name: 'Dragon', data:{
        name: "dragon trait",
        rating: 4,
        traits: []
    }  },
  ]);

  const addNpc = () => {
    const newNpc = { name: 'New NPC', data:{
        name: "noob",
        rating: 55,
        traits: []
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
