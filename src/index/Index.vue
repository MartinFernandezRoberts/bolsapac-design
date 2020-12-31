<template>
  <Carril class="hidden md:block"
  />
  <NavMovil class="md:hidden"
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