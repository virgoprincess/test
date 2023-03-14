<template>
  <div id="app">
    <div class="container">
      <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4 m-auto w-75">
        <div class="input-group">
          <div class="input-group-prepend">
            <button id="button-addon2" type="submit" class="btn btn-link text-warning"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
          </div>
          <input type="search" placeholder="Search" v-model="search" aria-describedby="button-addon2"
            class="form-control border-0 bg-light"/>
        </div>
      </div>
      <product-list :search="search"></product-list>
    </div>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
export default {
  name: 'App',
  components: {
    ProductList,
  },
  data() {
    return {
      search:'',
    }
  },
  methods: {
    displayProducts() {
      this.showGallery = !this.showGallery
    },
    addNewProduct() {

    }
  }
}
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
