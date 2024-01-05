<template>
  <div>
    <h2>{{ titulo }}</h2>
    <p>{{ counter }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
    <button @click="incrementar">+1</button>
    <button @click="decrementar">-1</button>
  </div>
</template>

<script>
export default {
  /*   props:["titulo", "valor"],
   */
  props: {
    titulo: String,
    valor: {
      type: Number,
      required: true,
      default: 100,
      validator(value) {
        if (value > 0) {
          console.log("Error!");
        }
        return value > 0;
      },
    },
  },
  data() {
    return {
      counter: this.valor,
    };
  },
  methods: {
    obtenerCuadrado() {
      console.log("Se calcula el cuadrado");
      return this.counter * this.counter;
    },
    incrementar() {
      this.counter++;
    },
    decrementar() {
      this.counter--;
    },
  },
  computed: {
    obtenerCuadradoComputado() {
      console.log("Se calcula el cuadrado computado");
      return this.counter * this.counter;
    },
  },
};
</script>

<style scoped>
  button{
    background-color: #64B687;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0px 5px;
    padding: 5px 15px;
    width: 40px;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }

  button:hover{
    background-color: #5aa57B;
  }

  h2{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background-color: aqua;
  }

  p{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: bold;
  }

</style>