<script>
import { Backends } from '~/@core/backendList'

export default {
    async created(){
        if(!this.$store.getters.item("pets", this.key)) {
            await this.fetchDataPet();
        }
        console.log("Pet: ", this.$store.getters.item("pets"));
        console.log("Shelter key: ", this.$store.getters.item("pets")?.shelterKey);
        console.log("after Shelter: ", this.$store.getters.item("shelters"));
        await this.fetchDataShelter();
        console.log("before Shelter: ", this.$store.getters.item("shelters"));
    },
    methods: {
        async fetchDataPet(){
            await this.$store.dispatch('getItems', {
                backend: Backends.API,
                itemType: 'api/v1/pets',
                requestConfig: { key: this.key },
                customName: 'pets',
                page: 1,
            });
        },
        async fetchDataShelter(){
            console.log("fetch shelters");
            console.log("this pet: ", this.pet);
            await this.$store.dispatch('getItems', {
                backend: Backends.API,
                itemType: 'api/v1/shelters',
                requestConfig: { key: this.pet.shelterKey },
                customName: 'shelters',
                page: 1,
            });
        }
    },
    computed: {
        pet(){
            return this.$store.getters.item("pets", this.key);
        },
        shelter(){
            return this.$store.getters.item("shelters", this.pet?.shelterKey);
        },
        key() {
            return this.$route.params.key;
        }
    },

}
</script>

<template>
    <div>
        <div class="container-fluid tm-container-content tm-mt-60">
            <div class="row mb-4">
                <h2 class="col-12 tm-text-primary">{{ pet?.name }} , {{ pet?.age }}</h2>
            </div>
            <div class="row mb-4">
                <h2 class="col-12 tm-text-primary"> {{ shelter?.email }} </h2>
            </div>
            <div class="row tm-mb-90">            
                <div class="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                    <img src="/default.jpg" alt="Image" class="img-fluid">
                </div>
                <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                    <div class="tm-bg-gray tm-video-details">
                        <p class="mb-4">
                            Please support us by making <a href="https://paypal.me/templatemo" target="_parent" rel="sponsored">a PayPal donation</a>. Nam ex nibh, efficitur eget libero ut, placerat aliquet justo. Cras nec varius leo.
                        </p>
                        <div class="text-center mb-5">
                            <a href="#" class="btn btn-primary tm-btn-big">Download</a>
                        </div>                    
                        <div class="mb-4 d-flex flex-wrap">
                            <div class="mr-4 mb-2">
                                <span class="tm-text-gray-dark">Location: </span><span class="tm-text-primary">{{ pet?.shelterKey }}</span>
                            </div>
                            <div class="mr-4 mb-2">
                                <span class="tm-text-gray-dark">Description: </span><span class="tm-text-primary">{{ pet?.description }}</span>
                            </div>
                        </div>
                        <div class="mb-4">
                            <h3 class="tm-text-gray-dark mb-3">License</h3>
                            <p>Free for both personal and commercial use. No need to pay anything. No need to make any attribution.</p>
                        </div>
                        <div>
                            <h3 class="tm-text-gray-dark mb-3">Tags</h3>
                            <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">Cloud</a>
                            <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">Bluesky</a>
                            <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">Nature</a>
                            <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">Background</a>
                            <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">Timelapse</a>
                            <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">Night</a>
                            <a href="#" class="tm-text-primary mr-4 mb-2 d-inline-block">Real Estate</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>