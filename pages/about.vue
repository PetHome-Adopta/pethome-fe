<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'About',
  setup() {
    const layout = 'default';
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
    <h1>TEST ABOUT</h1>
  </div>
</template>