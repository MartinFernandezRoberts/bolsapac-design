<template>
  <div class="md:hidden pt-2 pr-4 mr-4 mt-2 border-t border-r border-blue ">
    <NavMovil class="md:hidden"
    />
  </div>
  <div class="block" id="NomProducto">

  </div>
  <Carril class="hidden md:block"
  />
  <Nav class="hidden md:block"
  />
  <Footer
  />
</template>


<script>

import Footer from './components/footer/Footer'
import Carril  from './components/Carril'
import NavMovil from './components/navmovil/NavMovil'
import Nav from './components/nav/Nav'

export default {
  name: 'Index',
  components: {
    Footer,
    Carril,
    NavMovil,
    Nav
  }
}
</script>

<style scoped>
 
  #NomProducto{
    height: 5vh;  
  }
</style>