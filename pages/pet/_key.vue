<template>
  <div>
    {{ key }}
  </div>
</template>

<script>
export default {
    computed: {
        pet(){
            return this.$store.getters.item("pets", this.key);
        },
        key() {
            return this.$route.params.key;
        }
    },
    created(){
        if(this.$store.getters.item("pets", this.key)) {
            return;
        }
        console.log("Hago fetch")
    },

}
</script>

<style>

</style>