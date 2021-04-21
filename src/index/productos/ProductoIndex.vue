
<template>
<div id="Prodindx" class="md:w-full md:h-full">
<!-- Escritorio -->
    <div class=" pr-2 -mt-10 md:block hidden text-right">
        <h1 class="pr-4 font-mukta text-lg text-right font-mukta w800 ">
            {{ nombre  }}
        </h1>
        <p class="font-mukta text-sm text-right font-mukta w800"> {{ detalle }} </p>
    </div>

    <div class="flex flex-row">
        <div class="hidden md:block w-full">
            <Carousel class="w-full" :items-to-show="1" :wrapAround=true >
                <Slide v-for="(imagen, index) in imagenes" :key="index" >
                    <!-- <img class="lg:min-w-lg lg:max-w-md max-w-xs" :src="'/assets/img/productos/'+item.imagenes[index]" :alt= item.nombre > -->
                    <img class="md:max-w-xs " :src="'/assets/img/productos/'+imagenes[index]" style="height: 50vh" :alt= nombre >

                </Slide>
            <template #addons>
                <Navigation 
                />
                <Pagination />
            </template>
            </Carousel>
        </div>
    </div>

<!-- Móvil -->
    <div class="pt-2 pr-2 md:hidden " id="kntnt">
        <h1 class="pr-4 font-mukta text-lg text-right font-mukta w800 ">
            {{ nombre }}
            
        </h1>
        <p class="font-mukta text-sm text-right font-mukta w800"> {{ detalle }} </p>

<!--    <img v-for="imagen in query.imagenes" :key="imagen"  :src="require('@/assets/img/productos/'+imagen)" :alt= query.nombre > -->

        <Carousel class="pt-2" :items-to-show="1" :wrapAround=true >
            <Slide v-for="(imagen, index) in imagenes" :key="index" >
                <img class="max-w-xs" :src="'/assets/img/productos/'+imagenes[index]" :alt= nombre  >
            </Slide>

            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>

        <div id="dscr">
            <h1 class="pr-8 font-mukta text-sm text-right font-mukta w800 ">
                {{ nombre }}
            </h1>
            <h2 class="pt-3 font-mukta text-sm text-center font-mukta w400">
                {{ desc }}
            </h2>
        </div>
    </div>
</div>

</template>

<script>
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
    props: ['ind','nombre','detalle','desc','imagenes']

}

</script> 

<style scoped>
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
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  
}
.kntnt{
    height: 262px;
}
.dscr{
    height: 30px;
}

</style>
