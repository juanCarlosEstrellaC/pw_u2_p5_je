function obtenerNumeroAleatorio(inicio, fin) {
    return Math.floor(Math.random() * fin) + inicio;
}

const obtenerNumeroAleatorioLambda = (inicio, fin) => {
    return Math.floor(Math.random() * fin) + inicio;
}

const obtenerIdPokemons = () => {
    const idPokemon1 = obtenerNumeroAleatorio(1, 600);
    const idPokemon2 = obtenerNumeroAleatorio(1, 600);
    const idPokemon3 = obtenerNumeroAleatorio(1, 600);
    const idPokemon4 = obtenerNumeroAleatorio(1, 600);
    const vectorIdPokemon = [idPokemon1, idPokemon2, idPokemon3, idPokemon4];
    console.log(vectorIdPokemon);
    return vectorIdPokemon;
}

const consumirAPI = async (id) => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
}

async function consultarNombre(id) {
    const data = await consumirAPI(id);
    return data.name;
}

const obtenerNombresPokemons = async ([idPokemon1, idPokemon2, idPokemon3, idPokemon4]) => {
    const nombre1 = await consultarNombre(idPokemon1);
    const nombre2 = await consultarNombre(idPokemon2);
    const nombre3 = await consultarNombre(idPokemon3);
    const nombre4 = await consultarNombre(idPokemon4);

    //Creando objetos Pokemon
    const pk1 = {
        id: idPokemon1,
        nombre: nombre1
    }
    const pk2 = {
        id: idPokemon2,
        nombre: nombre2
    }
    const pk3 = {
        id: idPokemon3,
        nombre: nombre3
    }
    const pk4 = {
        id: idPokemon4,
        nombre: nombre4
    }

    const vectorPokemon = [pk1, pk2, pk3, pk4];
    console.log(vectorPokemon);
    return vectorPokemon;
}

const obtenerPokemons = async () => {
    const vectorIdPokemon = obtenerIdPokemons();
    return await obtenerNombresPokemons(vectorIdPokemon);
}

//Funcion de fachada. Es la que se exporta para ser usada en otros archivos.
const obtenerPokemonsFachada = async () => {
    return await obtenerPokemons();
}
// se exporta la funcion de fachada
export default obtenerPokemonsFachada;
