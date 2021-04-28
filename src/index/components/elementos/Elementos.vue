<template>
  <div 
  class="flex flex-col items-center  bg-blue  pt-6 md:pt-0 pb-3 md:pb-10 space-y-14 
          md:flex-row md:items-stretch md:bg-transparent md:space-y-0 md:ml-6 md:w-full"
  id="mov">
       <router-link v-for="(elem, ind) in elem" :key="ind" 
        :to="{ name:  elem.nombre }" 
        class="md:mx-auto md:w-full md:text-center md:py-2 text-white md:text-gray-600  md:hover:text-black"
        active-class="border-white border-b-2 border-solid md:border-blue md:text-black "
        >
          <p 
          class="text-xs md:text-sm lg:text-base 4xl:text-4xl text-center font-medium  font-mukta tracking-tighter md:tracking-normal w200 md:w600 ">
            {{ elem.disp }}
          </p>
        </router-link>

      </div>
</template>

<script>
export default {
    name: 'Elementos',
    data() {    
        return {
            isActive: true,
            elem: [
                { nombre:'somos', disp:'SOMOS',  dir:'/somos' },
                { nombre:'sustentabilidad', disp:'SUSTENTABILIDAD',  dir:'/sustentabilidad' },
                { nombre:'procesos', disp:'PROCESOS',  dir:'/procesos' },
                { nombre:'contacto', disp:'CONTACTO',  dir:'/contacto' },
            ],
        }
    },
}
</script>

<style scoped>
  
  @media(max-width: 768px){
  #mov{
    height: 287px; width:80px;
  }
}
</style>