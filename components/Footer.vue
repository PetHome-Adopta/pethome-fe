<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
})

</script>
<template>
  <div class="footer w-100">
    <h5 class="mb-5 ml-5">Pethome</h5>
    <b-row class="mx-auto">
      <b-col sm="12" md="6">
        <ul class="mx-auto">
          <li><a href="#">Sobre nosotros</a></li>
          <li><a href="#">Contactanos</a></li>
          <li><a href="#">Participar</a></li>
        </ul>
      </b-col>
      <b-col sm="12" md="6">
        <ul class="mx-auto">
          <li><a href="#">Sobre nosotros</a></li>
          <li><a href="#">Contactanos</a></li>
          <li><a href="#">Participar</a></li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>