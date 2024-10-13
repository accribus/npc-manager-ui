// src/App.js
import React, { useState } from 'react';
import NpcScaffold from './components/NpcScaffold';
import './index.css';

const App = () => {
  const [npcs, setNpcs] = useState([
    { name: 'Elf',
      traits: [{
        traitName: "magic",
        traitRating: 3,
      }],
    },
    { name: 'Dwarf',
        traits: [{
            traitName: "history",
            traitRating: 3,
          }],
    },
    { name: 'Dragon',
    traits: [{
        traitName: "breath weapon",
        traitRating: 6,
      }],
    },
  ]);

  const addNpc = () => {
    const newNpc = { name: 'Gnome',
        traits: [{
          traitName: "music",
          traitRating: 2,
        }]
      };
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
