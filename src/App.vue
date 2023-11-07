<template>
<products-page/>
</template>

<script>
import ProductsPage from './components/ProductsPage.vue';

export default {
  name: "App",
  components: {
    ProductsPage
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
