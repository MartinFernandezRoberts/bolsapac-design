<template>
    
    <div class="absolute top-20 left-20">
            <div class="flex-grow flex justify-center">
                <div id="LogoContain">
                    <img src="@/assets/img/bolsapac_logo.svg" alt="Bolsapac"/>
                </div>
                <div>
                    <Buscar
                    />
                </div>
                <div class="">
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
    #LogoContain{
        height: 110px;
        width: 160px;
    }
</style>