import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Body = () => {
  const [search, setSearch] = useState("");
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
  const filteredPokemons = pokemons.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase()),
  );
  useEffect(() => {
    fetchPokemon();
  }, [page]);

  return (
    <>
      <div className="m-4 p-4 flex justify-center">
        <input
          className="w-64 px-10 py-2 border rounded-3xl"
          type="text"
          placeholder="Search pokemons"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className=" flex justify-center ">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-10 gap-5 p-5">
          {filteredPokemons.map((poke) => {
            return <PokemonCard key={poke.name} poke={poke} />;
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
