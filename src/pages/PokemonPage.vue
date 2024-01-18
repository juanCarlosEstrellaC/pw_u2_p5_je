<template>
  <h1>Adivina el Pokemon</h1>
  <PokemonImagen :pokemonId="6" :showPokemon="true" />
  <PokemonOpciones />
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";

import obtenerPokemonsFachada from "../helpers/pokemonHelper.js";

export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  mounted() {   // Ojo, que mounted no se coloca como otra option api, con ":"
    console.log("Se montó el componente Pokemon Pages");
    this.cargaInicial(); 
  },
  methods: {
     async cargaInicial(){
      const arregloPokemons = await obtenerPokemonsFachada();
      console.log("Desde componente");
      console.log(arregloPokemons);
    }
  },
};
</script>

<style>
</style>