<template>
  <div class="options-container">
    <ul>
      <li
        v-for="pokemon in arregloPokemon"
        :key="pokemon.id"
        @click="seleccionarPokemon(pokemon)"
        :class="{ selected: pokemonSeleccionado === pokemon.id }"
      >
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    arregloPokemon: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      pokemonSeleccionado: null,
    };
  },
  methods: {
    seleccionarPokemon(pokemon) {
      this.$emit('seleccionoNombrePk', pokemon.id);
      this.pokemonSeleccionado = pokemon.id;
    }
  },
}
</script>

<style scoped>
.options-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  margin: 0 auto;
  background-color: rgb(199, 234, 222);
  margin: 20px;
}

ul {
  list-style-type: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0; /* Con esto funciono. */
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 150px;
  margin-bottom: 10px;
  cursor: pointer;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

li.selected {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>