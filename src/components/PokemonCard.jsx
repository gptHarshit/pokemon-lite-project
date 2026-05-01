const PokemonCard = ({ poke, onClick, isFav, toggleFavorite }) => {
  const parts = poke.url.split("/");
  const id = parts[parts.length - 2];

  return (
    <div
      className="border p-2 rounded-3xl flex flex-col items-center"
      onClick={onClick}
    >
      <h1>{poke.name}</h1>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={poke.name}
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(poke.name);
        }}
      >
        {isFav ? "❤️" : "🤍"}
      </button>
    </div>
  );
};


export default PokemonCard;