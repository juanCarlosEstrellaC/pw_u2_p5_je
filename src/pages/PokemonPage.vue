<template>
  <h1 v-if="!pokemonGanador">Espere por favor, estamos cargando el juego...</h1>
  <div v-else class="container">
    <div class="cabecera">
      <label>Intentos : {{ intentos }}</label>
      <label>Puntaje : {{ puntaje }}</label>
    </div>
    <h1>Adivina el Pokemon</h1>
    <PokemonImagen
      :pokemonId="pokemonGanador.id"
      :showPokemon="mostrarPokemon"
    />
    <PokemonOpciones
      @seleccionoNombrePk="revisarClick($event)"
      :arregloPokemon="pokemonsArr"
    />
  </div>

  <div v-if="gano" class="mensaje">
    <h1>Gano!</h1>
    <button @click="reiniciarJuego">Reiniciar Juego</button>
  </div>
  <div v-if="perdio" class="mensaje">
    <h1>Perdio!</h1>
    <button @click="reiniciarJuego">Reiniciar Juego</button>
  </div>
  
</template>

<script>
//Componentes
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";

//Helpers
import obtenerPokemonsFachada from "../helpers/pokemonHelper.js";

export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  data() {
    return {
      pokemonsArr: [],
      pokemonGanador: null,
      mostrarPokemon: false,
      puntaje: 0,
      intentos: 0,
      gano : false,
      perdio : false,
    };
  },
  methods: {
    async cargaInicial() {
      console.log("Desde componente");

      const arregloPokemons = await obtenerPokemonsFachada();
      console.log(arregloPokemons);

      this.pokemonsArr = arregloPokemons;

      const indiceGanador = Math.floor(Math.random() * 4); //  generar un número entero aleatorio en el rango [0, 3].
      this.pokemonGanador = this.pokemonsArr[indiceGanador];
      console.log(this.pokemonGanador);
    },
    revisarClick(datoRecibido) {
      this.intentos++;

      console.log("Dio click, y reporto desde el padre");
      console.log(datoRecibido);

      if (this.pokemonGanador.id === datoRecibido) {
        this.mostrarPokemon = true;
        this.gano = true;
        console.log("GANO");

        if (this.intentos == 1) {
          this.puntaje += 100;
        } else if (this.intentos == 2) {
          this.puntaje += 50;
        } else if (this.intentos == 3) {
          this.puntaje += 25;
        }
      }
      
      if (this.intentos == 3 && this.mostrarPokemon == false)
          this.perdio = true;
          console.log("Perdio");
    },
    reiniciarJuego() {
      this.puntaje = 0;
      this.intentos = 0;
      this.mostrarPokemon = false;
      this.pokemonGanador = null;
      this.pokemonsArr = [];
      this.gano = false;
      this.perdio = false;
      this.cargaInicial();
    },
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
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  background-color: aquamarine;
  border: solid 1px black;
}

.cabecera {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 200px;
  margin: 10px auto;
  background-color: aquamarine;
  border: solid 1px black;
}

.cabecera label{
  margin: 10px ;
}

.mensaje {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  background-color: burlywood;
  border: solid 1px black;
  padding-bottom: 20px;
}
</style>