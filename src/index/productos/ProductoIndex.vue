
<template>

<div class="flex flex-row">
    <div class="hidden md:block">
        <Carousel :items-to-show="1" :wrapAround=true >
            <Slide v-for="imagen in item.imagenes" :key="imagen" >
                <img :src="require('@/assets/img/productos/'+imagen)" :alt= item.nombre >
            </Slide>
        <template #addons>
            <Navigation />
            <Pagination />
        </template>
        </Carousel>
    </div>
</div>


  <div class="pt-2 pr-2 md:hidden " id="kntnt">
        <h1 class="pr-4 font-mukta text-lg text-right font-mukta w800 ">
            {{ item.nombre }}
            
        </h1>
        <p class="font-mukta text-sm text-right font-mukta w800"> {{ item.detalle }} </p>

<!--       <img v-for="imagen in query.imagenes" :key="imagen"  :src="require('@/assets/img/productos/'+imagen)" :alt= query.nombre > -->
     

    <Carousel class="pt-2" :items-to-show="1" :wrapAround=true >
        <Slide v-for="(imagen, index) in item.imagenes" :key="index" >
            <img :src="require('@/assets/img/productos/'+imagen)" alt="una imagen" >
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>

    <div id="dscr">
       <h1 class="pr-8 font-mukta text-sm text-right font-mukta w800 ">
            {{ item.nombre }}
            
        </h1>
        <h2 class="pt-3 font-mukta text-sm text-center font-mukta w400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.
        
        </h2>
    </div>
  </div>

</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { useRoute } from 'vue-router'

export default {
    name: 'ProductoIndex',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
    },
     data(){
        return {
            query: useRoute().query    
        }
    },  
    computed: {
        item() {
            
            return this.$store.state.items[useRoute().query.ind]
            
        }
    },
}
</script> 

<style>
.carousel__item {
  
  color:  var(--carousel-color-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
  height: 300px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.kntnt{
    height: 262px;
}
.dscr{
    height: 30px;
}
</style>
