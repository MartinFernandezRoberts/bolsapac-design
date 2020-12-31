<template>

  <div class="flex flex-row">
    <div class="">
      <BotonM :abierto="abierto" @abrir="abierto=!abierto"
      />
    </div>
    
    <div class="flex-grow flex justify-center" id="logM">
      <LogoM
      />
    </div>

  </div>
  
  <div class="flex flex-row">
    <div class="" id="encuadre">
      <ElementosM v-if="abierto"
      />
      <DivM v-else
      />
    </div>
    <div class="flex-grow flex justify-center">
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

export default {
  
    name: 'NavMovil',
    components: {
        LogoM,
        BotonM,
        ElementosM,
        DivM,
        Productos
    },
    data() {
      return {
        abierto: false,
        
      }
    },
}
</script>
<style scoped>
  #encuadre{
        height: 287px; width:80px;
  }
</style>