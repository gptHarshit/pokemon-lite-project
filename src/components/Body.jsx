import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import PokemonModal from "./PokemonModal";

const Body = () => {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [typedPokemons, setTypedPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });
  const [page, setPage] = useState(0);
  const offset = page * 20;

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch Pokémon");
      }
      const Data = await response.json();
      setPokemons(Data.results);
      console.log(Data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const filteredPokemons = pokemons.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase()),
  );

  const toggleFavorite = (name) => {
    let updated;
    if (favorites.includes(name)) {
      updated = favorites.filter((fav) => fav !== name);
    } else {
      updated = [...favorites, name];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  useEffect(() => {
    if (!selectedType) {
      setTypedPokemons(filteredPokemons);
      return;
    }

    const filterByType = async () => {
      const result = [];

      for (let p of filteredPokemons) {
        const res = await fetch(p.url);
        const data = await res.json();

        const types = data.types.map((t) => t.type.name);

        if (types.includes(selectedType)) {
          result.push(p);
        }
      }

      setTypedPokemons(result);
    };

    filterByType();
  }, [selectedType, pokemons, search]);

  useEffect(() => {
    if (!selectedPokemon) {
      setPokemonDetails(null);
      return;
    }

    const fetchDetails = async () => {
      const res = await fetch(selectedPokemon.url);
      const data = await res.json();
      console.log("data of poke : ", data);
      setPokemonDetails(data);
    };

    fetchDetails();
  }, [selectedPokemon]);

  return (
    <>
      <div className="m-2 p-4 flex justify-center">
        <input
          className="w-64 px-10 py-2 border rounded-3xl"
          type="text"
          placeholder="Search pokemons"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex justify-center gap-4 mt-2 mb-1">
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">All Types</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
        </select>
      </div>
      {loading && <p className="text-center mt-4">Loading...</p>}

      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      {!loading && !error && (
        <div className=" flex justify-center ">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-10 gap-5 p-5">
            {typedPokemons.map((poke) => {
              return (
                <PokemonCard
                  key={poke.name}
                  poke={poke}
                  onClick={() => setSelectedPokemon(poke)}
                  isFav={favorites.includes(poke.name)}
                  toggleFavorite={toggleFavorite}
                />
              );
            })}
          </div>
        </div>
      )}

      <div className="flex justify-center gap-5 mt-4">
        <button
          className="bg-blue-600 px-5 py-1 rounded-2xl border text-white cursor-pointer"
          disabled={page === 0}
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
        >
          Prev
        </button>

        <button
          className="bg-blue-600 px-5 py-1 rounded-2xl border text-white cursor-pointer"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>

      {selectedPokemon && (
        <PokemonModal
          selectedPokemon={selectedPokemon}
          pokemonDetails={pokemonDetails}
          onClose={() => setSelectedPokemon(null)}
          isFav={favorites.includes(pokemonDetails?.name)}
          toggleFavorite={toggleFavorite}
        />
      )}
    </>
  );
};

export default Body;
