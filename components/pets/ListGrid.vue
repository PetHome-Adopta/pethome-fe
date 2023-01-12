<script lang="ts">
import { defineComponent } from 'vue'
import { Backends } from '~/@core/backendList';

export default defineComponent({
  name: 'PetsListGrid',
  async created() {
    this.pets = await this.$store.dispatch("getItems", {backend: Backends.API, itemType: "api/v1/pets", requestConfig: {}, customName: "pets", page: 1})
    console.log('pets: ', this.pets.data)
  }
})

</script>
<template>
  <div>
    <b-row>
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
    </b-row>
  </div>
</template>