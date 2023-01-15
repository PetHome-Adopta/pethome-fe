<script lang="ts">
import { defineComponent } from 'vue'
import { Backends } from '~/@core/backendList'

export default defineComponent({
  name: 'PetsListGrid',
  async created() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      await this.$store.dispatch('getItems', {
        backend: Backends.API,
        itemType: 'api/v1/pets',
        requestConfig: {},
        customName: 'pets',
        page: 1,
      })
    },
  },
  computed: {
    pets() {
      return this.$store.getters.items?.pets?.items
    },
  },
})
</script>
<template>
  <div class="p-5">
    <b-row>
      <b-col cols="3" v-for="pet of pets" :key="pet.key">
        <PetsItem :pet="pet" />
      </b-col>
    </b-row>
  </div>
</template>