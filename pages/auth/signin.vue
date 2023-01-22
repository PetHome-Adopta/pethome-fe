<template>
  
</template>

<script>
import { Backends } from '~/@core/backendList'
export default {
    data(){
        return {
            user: "",
            password: ""
        }
    },
    methods: {
        async login(){

            try {
            await this.$store.dispatch("createItem", {
                backend: Backends.API,
                itemType: "login",
                customName: "token",
                requestConfig: {
                    user: this.user,
                    password: this.password
                }
            });

            const token = this.$store.getters.items.token;
            

            }catch(e){

            }


        }
    }
}
</script>

<style>

</style>