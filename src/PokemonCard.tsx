import Pokeball from "./goldenPokeball.svg";
import { Pokemon } from "./types";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="card-wrapper">
      <div className="image-wrapper">
        <img src={pokemon.image} alt="Mew" />
      </div>
      <div className="name-wrapper">
        <span className="name">{pokemon.name}</span>
        <img src={Pokeball} alt="pokeball" width="36" height="36" />
      </div>
    </div>
  );
}
