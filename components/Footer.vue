<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
})

</script>
<template>
  <div class="footer w-100">
    <h3 class="mb-5 ml-5">Pethome</h3>
    <div class="w-75 ml-5">
    <div class="d-flex flex-wrap justify-content-between">
      <div class="flex-item">
        <ul class="mx-auto">
          <li><NuxtLink :to="{name: 'about'}">Sobre nosotros</NuxtLink></li>
          <li><NuxtLink :to="{name: 'contact'}">Contactanos</NuxtLink></li>
          <li><NuxtLink :to="{name: 'register'}">Participar</NuxtLink></li>
        </ul>
      </div>
      <div class="flex-item">
        <ul class="mx-auto">
          <li><NuxtLink :to="{name: 'pets'}">Animales</NuxtLink></li>
          <li><NuxtLink :to="{name: 'shelters'}">Protectoras</NuxtLink></li>
          <li><NuxtLink :to="{name: 'login'}">Entrar</NuxtLink></li>
        </ul>
      </div>
    </div>
    </div>
  </div>
</template>