<template>
    
    <div class="hidden md:block">
            <div class="flex-row flex md:pt-10 md:pr-1 ">
                <div  class="2xl:h-60 2xl:-ml-72 xl:ml-11 md:ml-11 md:w-36  relative flex-grow flex justify-center" >
                    <img  class="" src="@/assets/img/bolsapac_logo.svg" alt="Bolsapac"/>
                </div>
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