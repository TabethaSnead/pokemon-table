import { getAllPokemon, getPokemonById } from '../fetch-utils.js';
import { renderPokemonDetail } from '../render-utils.js';

const detailPokemon = document.getElementById('detail-pokemon');

window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);
    const id = data.get('id');
    const pokemon = await getPokemonById(id);
    const pokemonDetail = renderPokemonDetail(pokemon[0]);
    detailPokemon.append(pokemonDetail);
});
