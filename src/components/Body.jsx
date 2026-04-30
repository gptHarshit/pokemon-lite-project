import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Body = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const Data = await response.json();
      setPokemons(Data.results);
      console.log(Data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      <div className=" flex justify-center ">
        <div className="flex flex-wrap gap-7 p-5">
          {pokemons.map((poke) => {
            return <PokemonCard poke={poke} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
