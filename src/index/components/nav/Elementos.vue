<template>
    

  <div class="flex w-full ml-6">
    <router-link :to="{ name: 'somos'}" class=" w-full text-center py-2 rounded-md" active-class="text-black"  >
      <p class="text-sm font-mukta w600 text-gray-600 lg:text-base hover:text-black" >
      SOMOS
      </p>
    </router-link>
    <router-link :to="{ name: 'sustentabilidad'}" class="w-full text-center py-2 rounded-md" active-class="text-black" >
      <p class="text-sm font-mukta w600 text-gray-600 lg:text-base hover:text-black">
      SUSTENTABILIDAD
      </p>
    </router-link>
    <router-link :to="{ name: 'procesos'}" class="w-full text-center py-2 rounded-md" active-class="text-black" >
      <p class="text-sm font-mukta w600 text-gray-600 lg:text-base hover:text-black">
      PROCESOS
      </p>
    </router-link>
    <router-link :to="{ name: 'contacto'}" class="w-full text-center py-2 rounded-md" active-class="text-black" >
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

