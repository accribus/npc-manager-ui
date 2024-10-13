import React from 'react';

const NpcTraits = ({ traits }) => {
  return (
    <div className="npc-trait">
      <ul>
        {traits.map((trait, index) => (
          <li key={index}>
            <strong>{trait.traitName}</strong> - Rating: {trait.traitRating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NpcTraits;