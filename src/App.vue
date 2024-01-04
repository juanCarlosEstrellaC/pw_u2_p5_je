<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Contador titulo="Contador 1"></Contador>
  <Contador titulo="Contador 2"/><!-- Usando la forma cortita -->
  <Contador titulo="Contador 3"/><!-- Usando la forma cortita -->
</template>

<script>
import Contador from "./components/Contador.vue";

export default {
  name: "App",
  components: {
    Contador,
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