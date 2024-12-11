const pokemonContainer = document.getElementById("pokemon-container");

// Fetch  para los primeros 20 pokemones
const fetchPokemon = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const data = await response.json();
        const pokemonList = data.results;
        
        for (const pokemon of pokemonList) {
            await fetchPokemonDetails(pokemon);
        }
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
    }
};

// Fetch Detalles de los pokemones
const fetchPokemonDetails = async (pokemon) => {
    try {
        const response = await fetch(pokemon.url);
        const data = await response.json();

        renderPokemonCard(data);
    } catch (error) {
        console.error(`Error fetching details for ${pokemon.name}:`, error);
    }
};

// Render a carta pokemón
const renderPokemonCard = (pokemon) => {
    const card = document.createElement("div");
    card.className = "col-md-3 col-sm-6";
    
    card.innerHTML = `
        <div class="card text-center">
            <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">
            <div class="card-body">
                <h5 class="card-title text-capitalize">${pokemon.name}</h5>
            </div>
        </div>
    `;

    pokemonContainer.appendChild(card);
};

// Llamar la función para inicializarla
fetchPokemon();
