const PokemonModal = ({ pokemonDetails, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center rounded-2xl">
      <div className="bg-amber-50 p-5 rounded-3xl ">
        {pokemonDetails ? (
          <>
            <h2 className="font-bold text-2xl items-center">
              {pokemonDetails.name}
            </h2>
            <img src={pokemonDetails.sprites.front_default} />
            <p className="text-red-500">
              HP: {pokemonDetails.stats[0].base_stat}
            </p>
            <p className="text-red-500">
              Attack: {pokemonDetails.stats[1].base_stat}
            </p>
            <p className="p-1">
              Abilities:{" "}
              {pokemonDetails.abilities.map((a) => a.ability.name).join(", ")}
            </p>
          </>
        ) : (
          <p>Loading...</p>
        )}
        <button
          className="border bg-blue-400 px-4 py-1 rounded-3xl "
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PokemonModal;
