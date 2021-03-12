
<template>
<div class="flex flex-row">
    <div class="hidden md:block">
        <Carousel :items-to-show="1" :wrapAround=true >
            <Slide v-for="imagen in query.imagenes" :key="imagen" >
                <img :src="require('@/assets/img/productos/'+imagen)" :alt= query.nombre >
            </Slide>
        <template #addons>
            <Navigation />
            <Pagination />
        </template>
        </Carousel>
    </div>
</div>


  <div class="pt-2 pr-2 md:hidden " id="kntnt">
        <h1 class="font-mukta text-lg text-right font-mukta w800 ">
            {{ query.nombre }}
            
        </h1>
        <p class="font-mukta text-sm text-right font-mukta w800"> {{ query.detalle }} </p>

<!--       <img v-for="imagen in query.imagenes" :key="imagen"  :src="require('@/assets/img/productos/'+imagen)" :alt= query.nombre > -->
     

    <Carousel :items-to-show="1" :wrapAround=true >
        <Slide v-for="imagen in query.imagenes" :key="imagen" >
            <img :src="require('@/assets/img/productos/'+imagen)" :alt= query.nombre >
        </Slide>

        <template #addons>
        <Navigation />
        <Pagination />
        </template>
    </Carousel>

    <div id="dscr">
       <h1 class="pr-8 font-mukta text-sm text-right font-mukta w800 ">
            {{ query.nombre }}
            
        </h1>
        <h2 class="font-mukta text-sm text-right font-mukta w400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.
        </h2>
    </div>
  </div>

</template>

<script>
import { useRoute } from 'vue-router'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

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
    }
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
  height: 280px;
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
