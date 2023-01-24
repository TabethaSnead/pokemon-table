export function renderPokemonCard(pokemon) {
    const div = document.createElement('div');
    const nameEl = document.createElement('div');
    const IdNum = document.createElement('div');
    const img = document.createElement('img');

    div.classList.add('pokemonCards');

    nameEl.textContent = pokemon.name;
    img.src = `../assets/pokemon_img/${pokemon.name}.png`;
    IdNum.textContent = `This pokemons ID number is${pokemon.id_number}`;
    div.append(nameEl, img, IdNum);
    return div;
}

export function renderPokemonDetail(pokemon) {
    const div = document.createElement('div');
    const nameAndId = document.createElement('div');
    const nameEl = document.createElement('div');
    const IdNum = document.createElement('div');
    const descriptionEl = document.createElement('p');
    const nextEvolution = document.createElement('p');
    const type = document.createElement('div');
    const img = document.createElement('img');

    div.classList.add('pokemonDetails');

    nameEl.textContent = pokemon.name;
    IdNum.textContent = `This pokemons ID number is${pokemon.id_number}`;
    descriptionEl.textContent = pokemon.description;
    nextEvolution.textContent = `This Pokemons next evolutions ID number is${pokemon.next_evolution}`;
    type.textContent = pokemon.pokemon_type.type;
    img.src = `../assets/pokemon_img${pokemon.name}`;

    nameAndId.append(nameEl, IdNum);
    div.append(nameAndId, img, descriptionEl, type, nextEvolution);
    return div;
}
