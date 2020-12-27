<template>
  <Carril
  />
  <!--<Nav
  /> -->
  <NavMovil
  />
<!--     <Selector class="relative inset-5"
        />       
        <Nav
        />
    <ProductosIndexCategorias 
    />
    <Footer
    /> -->
  <Footer
  />
</template>


<script>
/* 
import ProductosIndexCategorias from './components/productos/ProductosIndexCategorias'
import Nav from './components/nav/Nav'
import Selector from './components/Selector'
import Footer from './components/footer/Footer' */

import Footer from './components/footer/Footer'
import Carril  from './components/Carril'
import NavMovil from './components/navmovil/NavMovil'

export default {
  name: 'Index',
  components: {
/*     ProductosIndexCategorias,
    Nav,
    Selector,
    Footer */

    Footer,
    Carril,
    NavMovil
  }
}
</script>