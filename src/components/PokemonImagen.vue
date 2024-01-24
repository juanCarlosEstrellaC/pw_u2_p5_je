<template>
  <div class="pokemon-container">
    <img :src="imagenFuente" alt="No se puede visualizar" v-if="showPokemon" />
    <img :src="imagenFuente" alt="No se puede visualizar" v-if="!showPokemon" class="ocultar"/>
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imagenFuente() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
      /* return 
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
        this.pokemonId +
        ".svg" */
    },
  },
};
</script>

<style>
.ocultar {
  filter: brightness(0);
}

img {
  position: relative;
  height: 200px;
}

.pokemon-container {
  height: 200px;
}
</style>