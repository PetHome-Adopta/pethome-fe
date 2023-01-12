<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Backends } from '~/@core/backendList';

export default defineComponent({
  name: 'PetsListGrid',
  data() {
    return {
      pets: ref({data:[]}),
    }
  },
  async mounted() {
    this.pets = await this.$store.dispatch("getItems", {backend: Backends.API, itemType: "api/v1/pets", requestConfig: {}, customName: "pets", page: 1})
    console.log('pets: ', this.pets?.data)
  },
  computed: {
    petsList() {
      return this.pets?.data;
    }
  }
})

</script>
<template>
  <div>
    <div>
      <pre>{{petsList}}</pre>  
    </div>
    <div>
      <b-row>
          <b-col>1 of 3</b-col>
          <b-col>2 of 3</b-col>
          <b-col>3 of 3</b-col>
      </b-row>
    </div>
    <div v-if="petsList">
      <ul>
        <li v-for="pet in petsList" :key="pet.key">
          {{ pet.name }}
        </li>
      </ul>
    </div>
    <div v-else>
      Loading...
    </div>
    
  </div>
</template>