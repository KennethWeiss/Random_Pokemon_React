let randpoke = Math.floor(Math.random() * 151);
let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randpoke}.png`;
export default function RandomPokemon() {
  return (
    <div>
      <h1>Pokemon #{randpoke}</h1>
      <img src={url} alt="Pokemon" width="150" />;
    </div>
  );
}
