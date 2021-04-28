
<template>
<div id="Prodindx" class="md:w-10/12 md:h-full">
    <div class=" pt-2 md:pt-0 4xl:pt-56 pr-2 md:-mt-10">
        <h1 class="4xl:text-6xl font-mukta text-lg text-right font-mukta w800 ">
            {{ nombre  }}
        </h1>
        <p class="4xl:text-4xl font-mukta text-sm text-right font-mukta w800">
            {{ detalle }} </p>
    </div>

    <div class="flex flex-row">
        <div class="md:w-full">
            <Carousel class="md:w-full md:pt-0 pt-2 " :items-to-show="1" :wrapAround=true >
                <Slide v-for="(imagen, index) in imagenes" :key="index" >
                    <img class="md:max-w-xs 2xl:max-w-full " :src="require(`@/assets/img/productos/${imagenes[index]}`)" id="theIm" :alt= nombre >
                </Slide>
            <template #addons>
                <Navigation 
                />
                <Pagination />
            </template>
            </Carousel>
            <div id="dscr" class="block md:hidden">
            <h1 class="pr-8 font-mukta text-sm text-right font-mukta w800 ">
                {{ nombre }}
            </h1>
            <h2 class="pt-3 font-mukta text-sm text-center font-mukta w400">
                {{ desc }}
            </h2>
        </div>
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
@media(min-width: 768px){
  #theIm{ height: 50vh;
  max-height: 800px;
   }
}
/* @media(min-width: 1024px){
  #theIm{ height: 50vh;
   }
} */
</style>
