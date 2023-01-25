/* Imports */
import { getAllPokemon } from './fetch-utils.js';
import { renderPokemonCard } from './render-utils.js';
/* Get DOM Elements */
const pokemonList = document.getElementById('pokemon-list-page');
/* State */
let allPokemon = [];
/* Events */
window.addEventListener('load', async () => {
    const allPokemonData = await getAllPokemon();
    allPokemon = allPokemonData;
    displayAllPokemon();
});
/* Display Functions */
async function displayAllPokemon(pokemon) {
    pokemonList.textContent = '';
    for (let pokemon of allPokemon) {
        const pokemonCards = renderPokemonCard(pokemon);
        pokemonList.append(pokemonCards);
    }
}
// (don't forget to call any display functions you want to run on page load!)
