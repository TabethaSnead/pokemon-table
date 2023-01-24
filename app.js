/* Imports */
import { getAllPokemon, getPokemonTypes } from './fetch-utils.js';
/* Get DOM Elements */

/* State */

/* Events */
window.addEventListener('load', async () => {
    const addData = await getPokemonTypes();
    console.log(addData);
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
