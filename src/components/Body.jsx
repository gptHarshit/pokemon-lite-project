import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Body = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const offset = page * 20;

  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`,
      );
      const Data = await response.json();
      setPokemons(Data.results);
      console.log(Data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, [page]);

  return (
    <>
      <div className=" flex justify-center ">
        <div className="flex flex-wrap gap-7 p-5">
          {pokemons.map((poke) => {
            return <PokemonCard poke={poke} />;
          })}
        </div>
      </div>
      <div className="flex justify-center gap-5 mt-4">
        <button
          className="bg-blue-600 px-5 py-1 rounded-2xl border text-white"
          disabled={page === 0}
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
        >
          Prev
        </button>

        <button
          className="bg-blue-600 px-5 py-1 rounded-2xl border text-white"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Body;
