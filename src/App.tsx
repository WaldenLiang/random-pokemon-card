import { useCallback, useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "./types";

function App() {
  const randomNumber = Math.floor(Math.random() * 1000);
  const [pokemonId, setPokemonId] = useState(randomNumber);
  const [pokemon, setPokemon] = useState<Pokemon>({ name: "", image: "" });

  const fetchPokemon = useCallback(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon({
          name: data?.name,
          image: data?.sprites?.other?.["official-artwork"]?.["front_default"],
        });
      });
  }, [pokemonId, setPokemon]);

  function randomPokemonId() {
    setPokemonId(Math.floor(Math.random() * 1000));
  }

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  return (
    <div className="App">
      <h1 className="app-title">Find all your favorite Pokemon</h1>
      <p className="app-desc">
        You can know the type of Pokemon, its strengths, disadvantages and
        abilities.
      </p>
      <PokemonCard pokemon={pokemon} />
      <button className="random-button" onClick={randomPokemonId}>
        Random Pokemon
      </button>
    </div>
  );
}

export default App;
