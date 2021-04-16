<template>
  <Carril class="hidden md:block"
  />

  <Nav 
  />



  <div class="md:hidden pt-2 pr-4 mr-4 mt-2 border-t border-r border-blue ">
    <NavMovil class="md:hidden block"
    />
  </div>

  <div class=" md:flex md:flex-row md:absolute w-full md:h-4/6">
    <div class="hidden md:flex md:flex-col ">
      <Productos
      />
    </div>
    <div class="md:flex md:flex-col md:w-full"> 
      <router-view></router-view>
    </div>
  </div>

  <Footer 
  />


</template>


<script>

import Carril  from './components/Carril'
import NavMovil from './components/navmovil/NavMovil'
import Nav from './components/nav/Nav'
import Productos from './productos/Productos'
import Footer from './components/footer/Footer'


export default {
  name: 'Index',
  components: {
    Footer,
    Carril,
    NavMovil,
    Nav,
    Productos

  }
}
</script>