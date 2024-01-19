<template>
  <div >
    <div v-if="mostrarJuego" class="container">
      <h1>Casino Pokemon</h1>
      <h2>Puntaje:{{ puntaje }}</h2>
      <h2>Intento: {{ intento }}</h2>
      <Imagen :texto="texto1" :urlImg="url1" class="imagen"/>
      <Imagen :texto="texto2" :urlImg="url2" class="imagen"/>
      <Imagen :texto="texto3" :urlImg="url3" class="imagen"/>
      <div class="button-container">
        <button @click="jugar" class="boton-jugar">Jugar</button>
      </div>
    </div>

    <div v-if="mostrarPerdedor" class="mensajePerdedor">
      <h1>
        Has utilizado tus 5 intentos. El juego ha terminado, inténtalo
        nuevamente.
      </h1>
      <button @click="reiniciar">Nuevo Juego</button>
    </div>
    <div v-if="mostrarGanador" class="mensajeGanador">
      <h1>Puntaje: {{ puntaje }}</h1>
      <h1>¡Felicitaciones! Has ganado un premio de $10,000.00.</h1>
      <button @click="reiniciar">Nuevo Juego</button>
    </div>

    <!--     <PokemonPage />-->
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
/* import Contador from "./components/Contador.vue";
import Calculadora from "./components/Calculadora.vue";
import Pregunta from "./components/Pregunta.vue";
import Pokemon from "./components/Pokemon.vue";
import PokemonPage from "./pages/PokemonPage.vue"; */
import Imagen from "./components/Imagen.vue";

export default {
  name: "App",
  components: {
    /*     Contador,
    Calculadora,
    Pregunta,
    Pokemon,
    PokemonPage, */
    Imagen,
  },

  data() {
    return {
      puntaje: 0,
      intento: 0,
      url1: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      url2: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      url3: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      texto1: "XXXX",
      texto2: "XXXX",
      texto3: "XXXX",
      mostrarGanador: false,
      mostrarPerdedor: false,
      mostrarJuego: true,
    };
  },
  methods: {
    async jugar() {
      //instancia 1
      const data1 = await this.consumirAPI();
      this.texto1 = data1.answer;
      this.url1 = data1.image;

      //instancia 2
      const data2 = await this.consumirAPI();
      this.texto2 = data2.answer;
      this.url2 = data2.image;

      //instancia 3
      const data3 = await this.consumirAPI();
      this.texto3 = data3.answer;
      this.url3 = data3.image;

      this.evaluarResultado();
    },
    async consumirAPI() {
      return await fetch("https://yesno.wtf/api").then((r) => r.json());
    },
    evaluarResultado() {
      this.intento++;

      if (
        this.texto1 === "yes" &&
        this.texto2 === "yes" &&
        this.texto3 === "yes"
      ) {
        this.puntaje += 5;
      } else if (
        (this.texto1 === "yes" && this.texto2 === "yes") ||
        (this.texto1 === "yes" && this.texto3 === "yes") ||
        (this.texto2 === "yes" && this.texto3 === "yes")
      ) {
        this.puntaje = this.puntaje + 2;
      } else if (
        this.texto1 === "yes" ||
        this.texto2 === "yes" ||
        this.texto3 === "yes"
      ) {
        this.puntaje += 1;
      }

      if (this.puntaje >= 10) {
        this.mostrarGanador = true;
        this.mostrarPerdedor = false;
        this.mostrarJuego = false;
      }

      if (this.intento === 5) {
        this.mostrarPerdedor = true;
        this.mostrarGanador = false;
        this.mostrarJuego = false;
      }
    },
    reiniciar() {
      this.puntaje = 0;
      this.intento = 0;
      this.url1 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg";
      this.url2 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg";
      this.url3 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg";
      this.texto1 = "XXXX";
      this.texto2 = "XXXX";
      this.texto3 = "XXXX";
      this.mostrarGanador = false;
      this.mostrarPerdedor = false;
      this.mostrarJuego = true;
    },
  },
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(4, 200px);
  justify-content: center;
  align-items: center;
  border: 2px solid black; 
  padding: 10px; 
  width: 1300px;

}

h1 {
  grid-column: span 4;
}

h2 {
  grid-column: span 2;
}

.imagen {
  border: 1px solid black; 
  margin: 5px; 
}

.button-container {
  grid-column: span 3; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}

.boton-jugar {
  border: 2px solid black; 
  padding: 10px; 
  font-size: 16px; 
}

.mensajePerdedor{
  color: red;
  border: 2px solid black; 
  padding: 10px; 
  font-size: 16px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mensajePerdedor button{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 170px;
  margin: 0 auto;
  border: solid 1px black;
}
.mensajeGanador{
  color: rgb(0, 13, 255);
  border: 2px solid black; 
  padding: 10px; 
  font-size: 16px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mensajeGanador button{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 170px;
  margin: 0 auto;
  border: solid 1px black;
}


</style>