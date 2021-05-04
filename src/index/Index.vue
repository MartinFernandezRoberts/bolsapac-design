<template>
  <div class="flex flex-col min-h-screen">
    <div class="md:mt-4 md:mr-8 md:ml-4 md:border-t-2  md:border-solid md:border-blue" >
    <div class=" md:border-l-2 md:border-solid md:border-blue ">
      <Nav class="pt-2" @buscar="buscar" :serch="serch"
      />
    </div>

    <div
      class="md:hidden pt-2 pr-4 mr-4 mt-2 border-t border-r border-blue"
    >
      <NavMovil @buscar="buscar" :serch="serch"
      />
    </div>

    <div class=" md:flex md:flex-row w-full md:h-4/6">
      <div class="hidden md:flex md:flex-col ">
        <Productos class=" md:border-l-2 md:border-solid md:border-blue" :serch="serch"
        />
      </div>

      <div class="md:flex md:flex-col md:w-full md:-mt-28 3xl:-mt-12 3xl:ml-24" > 
        <router-view>
        </router-view>
      </div>
    </div>
  </div>
  
    <Footer 
    />
  </div>

</template>


<script>

import NavMovil from './components/navmovil/NavMovil'
import Nav from './components/nav/Nav'
import Productos from './productos/Productos'
import Footer from './components/footer/Footer'

export default {
  name: 'Index',
  components: {
    Footer,
    NavMovil,
    Nav,
    Productos,
  },
  data() {
      return {
          serch: ''
      }
  },
  methods: {
      buscar(str) {
          this.serch = str;
      }
  }
}
</script>

