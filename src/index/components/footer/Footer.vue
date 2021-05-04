<template>

<div class="bg-green w-full h-20 flex flex-col md:flex-row md:min-h-20 md:flex-grow md:mt-16 3xl:mt-28">
  <router-link :to="{ name: 'sustentabilidad'}" class="flex mx-auto md:h-auto  mt-2 md:my-6 relative">
    <div class="relative flex w-5 h-5 md:h-auto md:w-auto ">
      <img class="md:h-auto md:w-20 3xl:w-40  md:mx-0 mx-auto" src="@/assets/img/reciclable.svg" alt="Bolsapac"/>
    </div>
    <h1 class="3xl:text-3xl md:h-auto md:my-auto md:text-sm font-mukta text-right text-sm tracking-tighter font-mukta  h-4 text-white border-b-2 border-white ">
      PLÁSTICO
    </h1>
    
    <h1 class="3xl:text-3xl md:h-auto md:my-auto md:text-sm text-white text-left font-mukta text-sm tracking-tighter h-4 font-mukta w800 pl-1 pr-1 border-b-2 border-white ">
      COMPOSTABLE - RECICLABLE - REUTILIZABLE
    </h1>
  </router-link>
  <div class="flex mx-auto pt-2 md:pt-0 md:h-full ">
      <router-link 
      :to="{ name: 'contacto'}"
      class="3xl:text-2xl md:h-auto md:my-auto md:text-sm md:mx-3 font-mukta text-xs font-mukta w400 tracking-tighter text-white mx-1">
      <h1>
        Los Duraznos 0683, La Pintana, Santiago, Chile
      </h1>
      </router-link>
        <h1 class="hidden md:block 3xl:text-2xl md:h-auto md:my-auto md:text-sm md:mx-3 md:font-mukta md:w400 md:text-white cursor-default">|</h1>

      <a href="mailto:contacto@bolsapac.cl" class="3xl:text-2xl md:h-auto md:my-auto md:text-sm md:mx-3 text-white font-mukta text-xs font-mukta tracking-tighter w400 mr-1">
        contacto@bolsapac.cl
      </a>

        <h1 class="hidden md:block 3xl:text-2xl md:h-auto md:my-auto md:text-sm md:mx-3 md:font-mukta md:w400 md:text-white cursor-default">|</h1>

     <a href="mailto:juanriquel@bolsapac.cl" class="3xl:text-2xl md:h-auto md:my-auto md:text-sm md:mx-3 font-mukta text-xs font-mukta tracking-tighter w400 text-white">
        juanriquel@bolsapac.cl
      </a>
  
  </div>
</div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

