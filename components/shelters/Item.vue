<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ShelterItem',
  props: {
    shelter: {
      type: Object,
      required: true,
    },
  },
})
</script>
<template>
  <div class="pet-card rounded mt-3 ml-4 p-0">
    <div class="pet-image rounded">
      <img :src="shelter.imageURL || 'default.jpg'" class="rounded" @error="(e) => {e.target.src = 'default.jpg'}"/>
    </div>

    <div>
      <div class="mt-3 pl-1">
        <h4>{{ shelter.name }}</h4>
        <p v-if="shelter.description" class="text-ellipse-3">{{ shelter.description }}</p>
        <p
          >{{shelter.address}}</p
        >
      </div>
    </div>
  </div>
</template>
