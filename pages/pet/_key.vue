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
        <b-container class="bv-example-row bv-example-row-flex-cols">
            <b-row align-v="start">
                <b-col>{{ pet?.name }} , {{ pet?.age }}</b-col>
                <b-col/>
                <b-col><img src="default.jpg" class="rounded" /></b-col>
            </b-row>
            <b-row align-v="center">
                <b-col> Location </b-col>
            </b-row>
            <b-row align-v="end">
                <b-col>{{ pet?.description }}</b-col>
            </b-row>
        </b-container>
    </div>
</template>