
<template>
<div id="Prodindx" class="md:w-full md:h-full md:pt-2  ">
    <div class="pt-2 4xl:pt-56 pr-2 3xl:mb-24 ">
        <h1 class="4xl:text-6xl 3xl:text-3xl font-mukta text-lg text-right font-mukta w800 ">
            {{ nombre  }}
        </h1>
        <p class="4xl:text-4xl  3xl:text-2xl font-mukta text-sm text-right font-mukta w600">
            {{ detalle }} </p>
    </div>

    <div class="flex flex-row">
        <div class="md:w-full">
            <Carousel class=" md:w-full md:pt-0 pt-2 " :items-to-show="1" :wrapAround=true >
                <Slide v-for="(imagen, index) in imagenes" :key="index" >
                    <img class="max-h-80 3xl:max-h-96" :src="require(`@/assets/img/productos/${imagenes[index]}`)" id="theIm" :alt= nombre >
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
             <h2 class="pr-8 font-mukta text-sm text-center font-mukta w400">
                {{ desc }}
            </h2>
            </div>
            <span>
            <h2 class="hidden md:block 3xl:text-2xl 3xl:-mt-36 shadow-md w-1/3 -mt-24 font-mukta text-sm text-left font-mukta w400">
                {{ desc }}
            </h2>
            </span>
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

/* @media(min-width: 1024px){
  #theIm{ height: 50vh;
   }
} */
</style>
