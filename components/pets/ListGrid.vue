<script lang="ts">
import { computed, defineComponent } from 'vue'
import { Backends } from '~/@core/backendList';

export default defineComponent({
  name: 'PetsListGrid',
  async created() {
    await this.$store.dispatch("getItems", {backend: Backends.API, itemType: "api/v1/pets", requestConfig: {}, customName: "pets", page: 1})
    console.log('pets: ', this.$store.getters.items.pets.items);
  },
  computed: {
    pets() {
      return this.$store.getters.items.pets?.items;
    }
  }
})

</script>
<template>
  <div>
    <b-row>
      <b-col v-for="pet in pets" :key="pet.id">
        {{ pet.name }}
      </b-col>
    </b-row>
  </div>
</template>