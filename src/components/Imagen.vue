<template>
  <div class="container">
    <img :src="urlImg" alt="No se puede" />
    <label for="">{{ texto }}</label>
  </div>
</template>

<script>
export default {
  props: {
    texto: {
      type: String,
    },
    urlImg: {
      type: String,
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  margin: 0 auto;
  background-color: rgb(255, 255, 255);
}

img {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 170px;
  height: 300px;
}
</style>