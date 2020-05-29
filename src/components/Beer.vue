<template>
  <div v-if="beer">
    <h1>{{beer.name}}</h1>
    <img 
      class="beer-image" 
      :src=beer.image_url />
    <h5 class="beer-tip">{{beer.brewers_tips}}</h5>
  </div>
</template>

<script>
export default {
  name: 'Beer',
  data () {
    return {
      beer: null
    }
  },
  async mounted() {
    this.beer = this.$store.state.beer;
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .beer-image {
    max-height: 200px;
  }
  .beer-tip {
      max-width: 70%;
      margin: auto;
    }
</style>
