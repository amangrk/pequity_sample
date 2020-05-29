<template>
  <div class="app">
    <router-view/>
    <div class="nav-bars">
      Beers List 2020
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
body {
  overflow: hidden;
  a {
    color: royalblue;
  }
}
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;

  .nav-bars{
    background: cornflowerblue;
    position: fixed;
    width: 100%;
    padding: 10px;
    color: white;
    bottom: 0;
    left: 0;
  }
}
</style>
