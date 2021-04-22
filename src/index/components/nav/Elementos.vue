<template>
    

  <div class="relative flex items-baseline space-x-16 ml-20">
    <router-link :to="{ name: 'somos'}" class="px-2 py-2 rounded-md" active-class="text-black"  >
      <p class="text-sm font-mukta w600 text-gray-600 lg:text-base hover:text-black" >
      SOMOS
      </p>
    </router-link>
    <router-link :to="{ name: 'sustentabilidad'}" class="px-3 py-2 rounded-md" active-class="text-black" >
      <p class="text-sm font-mukta w600 text-gray-600 lg:text-base hover:text-black">
      SUSTENTABILIDAD
      </p>
    </router-link>
    <router-link :to="{ name: 'procesos'}" class="px-3 py-2 rounded-md" active-class="text-black" >
      <p class="text-sm font-mukta w600 text-gray-600 lg:text-base hover:text-black">
      PROCESOS
      </p>
    </router-link>
    <router-link :to="{ name: 'contacto'}" class="px-3 py-2 rounded-md" active-class="text-black" >
      <p class="text-sm font-mukta w600 text-gray-600 lg:text-base hover:text-black">
      CONTACTO
      </p>
    </router-link>
  </div>
        
    
</template>

<script>
export default {
  name: 'Elementos',
  data() {    
  return {
    isActive: true
    }
  }
}
</script>

