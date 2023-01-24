const SUPABASE_URL = 'https://gufldzbeyvbceuxgfcxw.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1ZmxkemJleXZiY2V1eGdmY3h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0OTI0OTYsImV4cCI6MTk5MDA2ODQ5Nn0.o6XJ-ggfqCoOTd35YoUJsnVjyrDXXT0G74YeNkDKbKw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAllPokemon() {
    const { data, error } = await client.from('pokemon').select('*');
    // console.log(data);
    return data;
}

export async function getPokemonTypes() {
    const { data, error } = await client.from('pokemon_type').select('*');
    return data;
}
