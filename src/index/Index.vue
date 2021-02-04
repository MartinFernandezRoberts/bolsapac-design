<template>
  <Carril class="hidden md:block"
  />
  <Nav class="hidden md:block"
  />
  <Footer
  />
  <div class="md:hidden pt-2 pr-4 mr-4 mt-2 border-t border-r border-blue ">
    <NavMovil class="md:hidden"
    />
  </div>
  <div class="static md:hidden" id="NomProducto">
    <h1 class="font-mukta"> {{ nomSeccion }} </h1>
  </div>
  
  <div>
    <router-view></router-view>
  </div>
  





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