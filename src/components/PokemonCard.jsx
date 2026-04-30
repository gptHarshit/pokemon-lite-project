import React from "react";

const PokemonCard = ({ poke }) => {
  const { name, url } = poke;
  const parts = poke.url.split("/");
  const id = parts[parts.length - 2];
  return (
    <div key={poke.name} className="border p-2 rounded-3xl flex flex-col">
      <h1 className="items-center justify-center">{poke.name}</h1>
      <img
        className="items-center justify-center"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={poke.name}
      />
    </div>
  );
};

export default PokemonCard;
