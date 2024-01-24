<template>
  <div class="options-container">
    <ul>
      <li
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click="$emit('selecciono', { id: pokemon.id, name: 'pepito' })"
      >
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
};
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
  padding: 0;   /* Con esto funciono. */ 
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
</style>