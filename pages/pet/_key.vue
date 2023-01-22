<script>
import { Backends } from '~/@core/backendList'

export default {
    async created(){
        if(this.$store.getters.item("pets", this.key)) {
            return;
        }
        await this.fetchData();
    },
    methods: {
        async fetchData(){
            await this.$store.dispatch('getItems', {
                backend: Backends.API,
                itemType: 'api/v1/pets',
                requestConfig: { key: this.key },
                customName: 'pets',
                page: 1,
            })
        }
    },
    computed: {
        pet(){
            return this.$store.getters.item("pets", this.key);
        },
        key() {
            return this.$route.params.key;
        }
    },

}
</script>

<template>
    <div>
        {{ pet }}
    </div>
</template>