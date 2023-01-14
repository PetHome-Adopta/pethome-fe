<script lang="ts">
import { defineComponent } from 'vue'
import { Backends } from '~/@core/backendList';

export default defineComponent({
  name: 'PetsListGrid',
  async created() {
    await this.$store.dispatch("getItems", {backend: Backends.API, itemType: "api/v1/pets", requestConfig: {}, customName: "pets", page: 1})
    console.log(JSON.stringify(this.$store.getters.items?.pets?.items[0]))
    console.log("Count:" + JSON.stringify(this.$store.getters.items?.pets?.items[1]))
  },
  computed: {
    pets() {
      return this.$store.getters.items?.pets?.items[0];
    }
  }
})

</script>
<template>
  <div>
    <b-row>
      <b-col>Name:</b-col>
      <b-col>Description:</b-col>
    </b-row>
      <div v-for="pet of pets" :key="pet.key">
        <b-row>
          <b-col>{{ pet.name }}</b-col>
          <b-col>{{ pet.description }}</b-col>
        </b-row>
      </div>
  </div>
</template>