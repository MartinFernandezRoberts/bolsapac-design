<template>

  <div class="flex flex-row">
    <div class="">
      <BotonM :abierto="abierto" @abrir="abierto=!abierto"
      />
    </div>
    
      <router-link :to="{ name: 'portada' }" class="flex-grow flex justify-center w-full">
        <div class="flex-grow flex justify-center w-full" id="logM">
          <img link-to class="" src="@/assets/img/LogoM.svg" alt="Bolsapac"/>  
        </div>
              
      </router-link>

  </div>
  
  <div class="flex flex-row">
    <div class="" id="enc">
      <Elementos v-if="abierto"
      />
      <DivM v-else
      />
    </div>

    <div class="w-full">
      <div class="">
        <Buscar @buscar="pasaBuscar" :serch="serch"
        />
      </div>
      <Productos
      />
    </div>
  </div>
</template>

<script>
import BotonM from './BotonM'
import Elementos from '../elementos/Elementos'
import DivM from "./DivM"
import Productos from '../../productos/Productos'
import Buscar from '../buscar/Buscar'

export default {
  
    name: 'NavMovil',
    components: {
        BotonM,
        Elementos,
        DivM,
        Productos,
        Buscar
    },
    props: ['serch'],
    data() {
      return {
        abierto: true,
        
      }
    },
    methods: {
        pasaBuscar(serch) {
            this.$emit('buscar', serch);
        }
    },
    emits: ['buscar'],
}
</script>
<style scoped>
  #enc{
        height: 287px; width:80px;
  }
</style>