<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PetItem',
  props: {
    pet: {
      type: Object,
      required: true,
    },
  },
})
</script>
<template>
  <div class="pet-card rounded mt-3 ml-4 p-0">
    <div class="pet-image rounded">
      <img src="default.jpg" class="rounded" />
      <div
        v-if="pet.urgentAdoption"
        class="text-white p-2 text-center urgent"
      >
        <p>URGENTE!</p>
      </div>
    </div>

    <div>
      <div class="mt-3 pl-1">
        <h4>{{ pet.name }}</h4>
        <span v-if="pet.shelter">{{ pet.shelter.address }}</span>
        <span v-if="pet.gender && pet.breed"
          >{{ pet.gender }} | {{ pet.breed }}</span
        >
      </div>
    </div>
  </div>
</template>
