<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
})

</script>
<template>
  <div>
   <b-navbar sticky toggleable="lg">
    <b-navbar-brand :to="{name: 'index'}">Pethome</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{name: 'index'}">Inicio</b-nav-item>
        <b-nav-item :to="{name: 'about'}">Sobre nosotros</b-nav-item>
        <b-nav-item :to="{name: 'pets'}">Animales</b-nav-item>
        <b-nav-item :to="{name: 'shelters'}">Protectoras</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{name: 'auth-signin'}"><b-button class="primary">Entrar</b-button></b-nav-item>
        <b-nav-item :to="{name: 'auth-signup'}"><b-button class="primary">Registrarme</b-button></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
   </b-navbar>
  </div>
</template>