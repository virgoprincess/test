<template>
  <div class="product position-relative">
    <div class="action-icons p-3 d-flex justify-content-end">
      <font-awesome-icon icon="fa-solid fa-trash-can" size="xl"
        @click="$emit('deleteProduct', product.id)" />
    </div>
    <figure class="mt-3">
      <img class="product-image" :src="product.image" />
      <figcaption class="p-2">
        <div>
          <h5 class="fw-semibold my-3">{{ product?.title }}</h5>
          <p class="text-justify fw-lighter">{{ product?.description.substring(1, 200) }} <span>...</span></p>
          <span class="price">${{ product?.price }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <rating :max="5" :current="product.rating.rate"></rating>
          <div>({{ product.rating.count }})</div>
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<script>
import Rating from './Rating.vue'
export default {
  name: 'ProductComponent',
  components: { Rating },
  props: ['product'],
}
</script>

<style lang="scss">
.product {
  box-shadow: 1px 0px 16px 3px rgba(189, 189, 189, 1);
  -webkit-box-shadow: 1px 0px 16px 3px rgba(189, 189, 189, 1);
  -moz-box-shadow: 1px 0px 16px 3px rgba(189, 189, 189, 1);
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;

  .product-image {
    background-size: contain;
    background-repeat: no-repeat;
    height: 300px;
    max-width: 90%;
  }

  .text-justify {
    text-align: justify;
  }

  .action-icons {
    svg {
      :hover {
        color: #9c3e3e;
      }
      color: #af6262;
      cursor: pointer;
    }
  }

  .price {
    color: #c2246e;
    font-size: 1.3em;
  }
}</style>