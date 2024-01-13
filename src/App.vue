<template>
  <div>
   
    <PokemonPage />

    <!--     <Pokemon/>-->
    <!--      <Pregunta></Pregunta>-->
    <!--     <h2>Calculadora</h2>
    <Calculadora />  -->
    <!--     <img alt="Vue logo" src="./assets/logo.png" />
    <Contador titulo="Contador 1" valor="10"></Contador>
    <Contador titulo="Contador 2" :valor="calcularValor()" />
    <Contador titulo="Contador 3" /> -->
  </div>
</template>

<script>
import Contador from "./components/Contador.vue";
import Calculadora from "./components/Calculadora.vue";
import Pregunta from "./components/Pregunta.vue";
import Pokemon from "./components/Pokemon.vue";
import PokemonPage from "./pages/PokemonPage.vue";

export default {
  name: "App",
  components: {
    Contador,
    Calculadora,
    Pregunta,
    Pokemon,
    PokemonPage,
  },
  methods: {
    calcularValor() {
      return 5 + 5 * 10;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>