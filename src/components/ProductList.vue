<template>
  <div class="grid-wrapper">
    <product v-for="product in filteredProducts" :key="product.id" :product="product" @deleteProduct="deleteProduct" />
  </div>
</template>

<script>
import Product from './Product.vue'
import axios from 'axios';

export default {
  name: 'ProductListComponent',
  components: { Product },
  props: ['search'],
  data() {
    return {
      allProducts: [],
      filteredProducts: []
    }
  },
  methods: {
    async loadProducts() {
      await axios.get("https://fakestoreapi.com/products?limit=10")
        .then((response) => {
          this.allProducts = response.data
          this.filteredProducts = this.allProducts
        })
    },
    async deleteProduct(id) {
      await axios.get("https://fakestoreapi.com/products/" + id)
        .then((res) => {
            this.allProducts = this.allProducts.filter(product => product.id !== res.data.id)
            this.filteredProducts = this.allProducts
        })
    }
  },
  mounted() {
    this.loadProducts();
  },
  watch: {
    search(val) {
      this.filteredProducts = this.allProducts.filter( product => product.title.toLowerCase().includes(val.toLowerCase()))
    }
  }
}
</script>


<style lang="scss" scoped>
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  grid-gap: 20px;
  justify-content: center;
}
</style>