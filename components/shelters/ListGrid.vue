<script lang="ts">
import { defineComponent } from 'vue'
import { Backends } from '~/@core/backendList'

export default defineComponent({
  name: 'ShelterListGrid',
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      await this.$store.dispatch('getItems', {
        backend: Backends.API,
        itemType: 'api/v1/shelters',
        requestConfig: {},
        customName: 'shelters',
        page: 1,
      })
    },
  },
  computed: {
    shelters() {
      return this.$store.getters.items?.shelters?.items
    },
  },
})
</script>
<template>
  <div class="p-5">
    <b-row>
      <b-col cols="3" v-for="shelter of shelters" :key="shelter.key">
        <NuxtLink :to="{name: 'shelters-key', params: { key: shelter.key } }">
          <SheltersItem :shelter="shelter" />
        </NuxtLink>
      </b-col>
    </b-row>
  </div>
</template>
<style lang="css" scoped>
a {
  color: black !important;
  text-decoration: none !important;
}
a:hover {
  text-decoration: none !important;
}
</style>