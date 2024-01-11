<template>
  <div>
    <div class="superior">
      <label for="idInput">Id</label>
      <input id="idInput" type="number" v-model="id" @keypress="ingreso" />
    </div>
    <div class="formulario">
      <label> Nombre:</label>
      <input type="text" :value="name" readonly />
      <label> Weight:</label>
      <input type="text" :value="weight" readonly />
      <label> Base Experience:</label>
      <input type="text" :value="base_experience" readonly />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      weight: "",
      base_experience: "",
      url: "",
    };
  },
  methods: {
    construirURLAPI(id) {
      this.url = "https://pokeapi.co/api/v2/pokemon/" + this.id;
      console.log(this.url);
      return url;
    },
    ingreso(event) {
      console.log(event);
      if (event.charCode === 13) {
        console.log(this.id);
        this.url = "https://pokeapi.co/api/v2/pokemon/" + this.id;
        console.log(this.url);

        this.consumirAPI();
      }
    },
    async consumirAPI() {
      const { name, weight, base_experience } = await fetch(this.url).then(
        (r) => r.json()
      );
      console.log(name);
      console.log(weight);
      console.log(base_experience);

      this.name = name;
      this.weight = weight;
      this.base_experience = base_experience;
    },
  },
};
</script>

<style>
.superior {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  background-color: aquamarine;
  border: solid 1px black;
  padding-bottom: 10px;
  padding-top: 10px;
}
.formulario {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  background-color: rgb(178, 236, 217);
  border: solid 1px black;
  padding-bottom: 10px;
  padding-top: 10px;
}

input{
    text-align: center;
    margin-bottom: 10px;
}

</style>