<template>
  <div class="md:mt-4 md:mr-8 md:ml-4 md:border-t-2  md:border-solid md:border-blue md:h-full" >
    <div class=" md:border-l-2 md:border-solid md:border-blue ">
      <Nav class="pt-2" @buscar="buscar" :serch="serch"
      />
    </div>

    <div class="md:hidden pt-2 pr-4 mr-4 mt-2 border-t border-r border-blue">
      <NavMovil 
      />
    </div>

    <div class=" md:flex md:flex-row w-full md:h-4/6">
      <div class="hidden md:flex md:flex-col ">
        <Productos class=" md:border-l-2 md:border-solid md:border-blue" :serch="serch"
        />
      </div>

      <div class="md:flex md:flex-col md:w-full" id="rout"> 
        <router-view>
        </router-view>
      </div>
    </div>
  </div>
  
  
  <div class="">
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

<style >

@media(min-width: 768px){
  #rout{ height: 59vh; }
}

</style>