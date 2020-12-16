<template>
    <div class="max-w-full mx-auto py-6 sm:px-6 lg:px-8 bg-white" style="height: 100vh;">
      <div class="mx-w-7xl border-solid border-2 border-blue-400 bg-white" style="height: 95vh;" >
        <Selector
        />       
        <Nav
        />
        <ProductosIndexCategorias 
        />
      </div>
    </div>
    <Footer
    />
</template>


<script>

import ProductosIndexCategorias from './components/productos/ProductosIndexCategorias'
import Nav from './components/nav/Nav'
import Selector from './components/Selector'
import Footer from './components/footer/Footer'

export default {
  name: 'Index',
  components: {
    ProductosIndexCategorias,
    Nav,
    Selector,
    Footer
  }
}
</script>