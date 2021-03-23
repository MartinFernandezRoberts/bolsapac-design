<template>
    
    <div class="hidden md:block">
            <div class="flex-row flex md:pt-10 md:pr-1 ">
                <router-link to="/">
                    <div  class="md:ml-11  md:w-56  relative flex-grow flex justify-center" >
                        
                            <img link-to class="" src="@/assets/img/bolsapac_logo.svg" alt="Bolsapac"/>
                        
                    </div>
                </router-link>
                <div class="flex flex-col">
                    <Buscar
                    />
                </div>
                <div class="flex flex-col">
                    <Elementos 
                    /> 
                </div>
            </div>
    </div>
</template>

<script>
import Buscar from './Buscar'
import Elementos from './Elementos'


export default {
    name: 'Nav',
    components:{
        Elementos,
        Buscar
    }
}
</script>

<style scoped>
    #imlog{
        height: 110px;
        width: 160px;
    }
   
</style>