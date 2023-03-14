<template>
  <div class="star-rating">
    <span v-for="n in max" :key="n">&star;</span>
    <div class="star-rating-current" :style="{ width: getRating + '%' }">
      <span v-for="n in max" :key="n">&starf;</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'RatingComponent',
  data(){
    return {
      value: 4
    }
  },
  props: ['max', 'current'],
  computed: {
    getRating: function() {
      return (this.current / this.max) * 100
    }
  },
}
</script>

<style lang="scss" scoped>
.star-rating {
  color: rgb(255, 187, 0);
  display: inline-block;
  font-size: 2em;
  position: relative;
  transform: translate(-6px);
}

.star-rating-max, 
.star-rating-current {
  position: absolute;
  top: 0;
}

.star-rating-current {
  overflow: hidden;
  white-space: nowrap;
}
</style>