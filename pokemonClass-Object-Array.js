class Pokemon {
  constructor(name, type, typeTwo, size) {
    this.name = name;
    this.type = type;
    this.typeTwp = typeTwo;
    this.size = size;
  }
}

const squirtle = new Pokemon(
  "Squirtle",
  "Water",
  "NA",
  (Pokemon.size = Math.floor(Math.random() * 100))
);

const charmander = new Pokemon(
  "Charmander",
  "Fire",
  "NA",
  (Pokemon.size = Math.floor(Math.random() * 100))
);

const bulbasaur = new Pokemon(
  "Bulbasaur",
  "Grass",
  "NA",
  (Pokemon.size = Math.floor(Math.random() * 100))
);

const pokemonPicker = [charmander, squirtle, bulbasaur];

export default pokemonPicker;
