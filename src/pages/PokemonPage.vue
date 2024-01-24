<template>
  <h1 v-if="!pokemonGanador">Espere por favor, estamos cargando el juego...</h1>
  <div v-else class="container">
    <h1>Adivina el Pokemon</h1>
    <PokemonImagen :pokemonId="pokemonGanador.id" :showPokemon="mostrarPokemon"/>
    <PokemonOpciones @selecciono="revisarClick($event)" :pokemons="pokemonsArr" />
  </div>
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

  beforeCreate() {
    console.log("Antes de crear el componente");
  },
  created() {
    console.log("Se creó el componente");
  },
  beforeMount() {
    console.log("Antes de que se monte el componente en la página");
  },
  mounted() {
    // Ojo, que mounted no se coloca como otra option api, con ":"
    console.log("Se montó el componente Pokemon Pages");
    this.cargaInicial();
  },
  beforeUpdate() {
    console.log("Antes de que se actualize el componente");
  },
  updated() {
    console.log("Se actualiza el componente");
  },
  beforeDestroy() {
    console.log("Antes de destruir");
  },
  destroyed() {
    console.log("Destruido");
  },

  methods: {
    async cargaInicial() {
      const arregloPokemons = await obtenerPokemonsFachada();
      console.log("Desde componente");
      console.log(arregloPokemons);
      this.pokemonsArr = arregloPokemons;
      const indiceGanador = Math.floor(Math.random() * 4);
      this.pokemonGanador = this.pokemonsArr[indiceGanador];
    },
    revisarClick(datoRecibido){
      console.log("Dio click, y reporto desde el padre");
      console.log(datoRecibido.id);
      console.log(datoRecibido.name);
      this.mostrarPokemon = true;

      if (this.pokemonGanador.id === datoRecibido.id) {
        console.log("GANO");
      }
    }
  },
  data() {
    return {
      pokemonsArr: [],
      pokemonGanador: null,
      mostrarPokemon: false,
    };
  },
};
</script>

<style scoped>
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  background-color: aquamarine;
  border: solid 1px black;
}
</style>