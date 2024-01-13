const obtenerIdPokemons = () => {
    const pokemon1 = obtenerNumeroAleatorio(1,600);
    const pokemon2 = obtenerNumeroAleatorio(1,600);
    const pokemon3 = obtenerNumeroAleatorio(1,600);
    const pokemon4 = obtenerNumeroAleatorio(1,600);
    const pokemonsArr = [pokemon1, pokemon2, pokemon3, pokemon4]
    console.log(pokemonsArr);
 }

const obtenerNombresPokemons = (arreglo) => {
    const nombre1 = consumirAPI(arreglo[0]);
    const nombre2 = consumirAPI(arreglo[1]);
    const nombre3 = consumirAPI(arreglo[2]);
    const nombre4 = consumirAPI(arreglo[3]);
}

function consumirAPI(id){
    return "nombre"
}

const obtenerIdPokemonsFachada = () => {
    obtenerIdPokemons()
}

function obtenerNumeroAleatorio(inicio, fin){
   return Math.floor(Math.random() * fin) + inicio;
}



export default obtenerIdPokemonsFachada
