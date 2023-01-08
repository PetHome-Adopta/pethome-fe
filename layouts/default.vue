<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultLayout',
  setup() {
    const layout = 'default'
  },
  created() {
    console.log('test created')
  },
  mounted() {
    console.log('test mounted')
  },
  updated() {
    console.log('test updated')
  },
  methods: {
    fetchData(test) {
      console.log(test)
    },
    fetchData2(e) {
      console.log('test fetch data 2')
      console.log(e)
    },
  },
  computed: {},
  data() {
    return {}
  },
})
</script>
<template>
  <div>
    <Nuxt />
  </div>
</template>