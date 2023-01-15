<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultLayout',
})

</script>
<template>
  <div>
    <Header/>
    <Nuxt />
    <Footer/>
  </div>
</template>

<style>
@import "@/@core/css/main.css"
</style>