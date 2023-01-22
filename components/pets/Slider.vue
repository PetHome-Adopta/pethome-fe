<script>
export default {
  name: 'Carousel',
  data() {
    return {
      slide: 0,
      sliding: true,
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
  },
}
</script>
<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      :img-height="300"
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide>
        <template v-slot:img>
      <img
       class="d-block fit-img"
       src="image.jpg"
       alt="image slot">
    </template>
        <h1 class="primary-text size-4 text-uppercase">Pethome</h1>
        <h2>
          Hay cientos de historias como las de Tobi, esperando un nuevo hogar
        </h2>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
