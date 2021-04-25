<template>

  <div class="flex flex-row">
    <div class="">
      <BotonM :abierto="abierto" @abrir="abierto=!abierto"
      />
    </div>
    
    <div class="flex-grow flex justify-center" id="logM">
      <router-link to="/" class="">
      <LogoM
      />
      </router-link>
    </div>

  </div>
  
  <div class="flex flex-row">
    <div class="" id="enc">
      <ElementosM v-if="abierto"
      />
      <DivM v-else
      />
    </div>

    <div class="w-full">
      <div class="">
        <Buscar
        />
      </div>
      <Productos
      />
    </div>
  </div>
</template>

<script>
import LogoM from './LogoM'
import BotonM from './BotonM'
import ElementosM from './ElementosM'
import DivM from "./DivM"
import Productos from '../../productos/Productos'
import Buscar from '../buscar/Buscar'

export default {
  
    name: 'NavMovil',
    components: {
        LogoM,
        BotonM,
        ElementosM,
        DivM,
        Productos,
        Buscar
    },
    data() {
      return {
        abierto: true,
        
      }
    },
}
</script>
<style scoped>
  #enc{
        height: 287px; width:80px;
  }
</style>