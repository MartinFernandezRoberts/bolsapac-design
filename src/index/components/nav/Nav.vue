<template>

    <div class="hidden md:block">
            <div class="flex-row flex mt-2 ">
                <router-link active-class="shadow-md " class=" md:ml-11  md:w-56 md:max-h-36 2xl:max-h-48 relative flex-grow flex justify-center transition duration-500 ease-in-out" 
                :to="{ name: 'portada'}">
                    
                        <img link-to class="" src="@/assets/img/bolsapac_logo.svg" alt="Bolsapac"/>
                    
                </router-link>
                <div class="flex flex-col ">
                    <div class="">
                    <Buscar @buscar="pasaBuscar" :serch="serch"
                    />
                    </div>
                </div>
                    <Elementos class="h-20"
                    />
            </div>
    </div>
    
</template>

<script>
import Buscar from '../buscar/Buscar'
import Elementos from '../elementos/Elementos'


export default {
    name: 'Nav',
    components:{
        Elementos,
        Buscar
    },
    props: ['serch'],
    methods: {
        pasaBuscar(serch) {
            this.$emit('buscar', serch);
        }
    },
    emits: ['buscar'],
}
</script>

<style scoped>
    #imlog{
        height: 110px;
        width: 160px;
    }
   
</style>