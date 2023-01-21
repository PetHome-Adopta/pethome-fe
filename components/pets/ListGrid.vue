<script lang="ts">
import { computed, defineComponent } from 'vue'
import { Backends } from '~/@core/backendList';

export default defineComponent({
  name: 'PetsListGrid',
  async created() {
    await this.$store.dispatch("getItems", {backend: Backends.API, itemType: "api/v1/pets", requestConfig: {}, customName: "pets", page: 1})
    console.log('pets: ', this.pets?.data)
  },
  computed: {
    pets() {
      return this.$store.getters.pets;
    }
  }
})

</script>
<template>
<div></div>
</template>