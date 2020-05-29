<template>
  <div class="container">
    <h1>Here's the beers we serve!</h1>
    <ul class="list">
      <li
        class="list-item" 
        v-for="beer in beers" 
        :key="beer.id" 
        @click="beer_selected(beer)"
      >
        <router-link v-bind:to="{ name: 'Beer'}">{{beer.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import BeerService from '@/services/BeerService'
export default {
  name: 'Home',
  data () {
    return {
      beers: []
    }
  },
  async mounted() {
    const beer_results = await BeerService.getBeers();
    this.beers = beer_results.data;
  },
  methods: {
    beer_selected(beer) {
      this.$store.commit('selectBeer', beer)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container{
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh);
  .list {
    text-align: left;
    .list-item {
      list-style: none;
      margin: 10px 0;
    }
  }
}
</style>
