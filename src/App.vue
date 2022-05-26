<template>
  <div>
    <!-- simulaizone di ingio di dati al db per aggiungere una pizza -->
    <button @click="insertPizza()">aggiungi la pizza</button>

    <!-- ciclo tutte le istanze Pizza e uso la proprità shortDescription -->
    <h1 v-for="(pizza, index) in pizze" :key="index">{{pizza.shortDescription}}</h1>
  </div>
</template>

<script>

// con questa sitassi con graffe posse scegliere quali elementi importare
import {moltiplica} from './assets/data/functions';
import {frutti, nomi} from './assets/data/archivio';

// questo è l'import di una classe con export default
import Pizza from './assets/data/Pizza';
import axios from 'axios';

export default {
  name: 'App',
  components: {

  },
  data(){
    return{
      frutti,
      nomi,
      endPoint: 'http://localhost:3000/pizzas',
      pizze:[],
      napoli: {name:'Napoli', ingredients:'pomodoro|acciughe'}
    }
  },
  methods:{
    insertPizza(){
      axios.post(this.endPoint,this.napoli)
        .then(r => {
          console.log(r);
          this.getPizze();
        })

    },
    // chiamata aziose al db e passo l'array di oggetti a setPizze
    getPizze(){
      axios.get(this.endPoint)
        .then(r => {
          this.setPizze(r.data);
        })
    },
    setPizze(arrPizze){
      // prendo l'array di oggetti che viene dal DB e lo cilo
      // ad ogni ciclo creo una nuova istanza della classe Pizza e la pusho nel mia array di pizze
      this.pizze = [];
      arrPizze.forEach(pizza => {
            const newPizza = new Pizza(pizza.name, pizza.ingredients.toString('|'));
            newPizza.setPrice(pizza.price)
            this.pizze.push(newPizza);
          });
    } 
  },
  mounted(){
      console.log(moltiplica(3, 2));
      console.log(this.frutti);
      this.getPizze();

      
  }

}
</script>

<style lang="scss">

</style>
