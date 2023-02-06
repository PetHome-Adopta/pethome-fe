<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'About',
  data() {
    return {}
  },
})
</script>

<template>
  <div style="padding: 50px;">
    <h1>SOBRE NOSOTROS</h1>
    <h2>Quienes somos?</h2>
    <b-row class="mt-5 mb-2">
      <b-col cols="4">
        <img src="image.jpg"  class="w-100"/>
      </b-col>
      <b-col cols="8">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi assumenda ea nesciunt dolore blanditiis dolorem incidunt delectus magni est nam, reprehenderit nemo aliquam illum et neque aliquid possimus consectetur porro!</p>
      </b-col>
    </b-row>
     <b-row class="mt-5 mb-2">
      <b-col cols="8">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi assumenda ea nesciunt dolore blanditiis dolorem incidunt delectus magni est nam, reprehenderit nemo aliquam illum et neque aliquid possimus consectetur porro!</p>
      </b-col>
      <b-col cols="4">
        <img src="image.jpg"  class="w-100"/>
      </b-col>
    </b-row>
     <b-row class="mt-5 mb-2">
      <b-col cols="4">
        <img src="image.jpg"  class="w-100"/>
      </b-col>
      <b-col cols="8">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi assumenda ea nesciunt dolore blanditiis dolorem incidunt delectus magni est nam, reprehenderit nemo aliquam illum et neque aliquid possimus consectetur porro!</p>
      </b-col>
    </b-row>
  </div>
</template>