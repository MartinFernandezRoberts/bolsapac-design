<template>
  <div 
  class="flex md:flex-grow flex-col items-center bg-blue pt-6 md:pt-0 pb-3 md:pb-10 space-y-14
          md:flex-row md:bg-transparent md:space-y-0 md:pl-6 md:ml-12 md:w-2/4 md:space-x-0 "
          
  id="mov">
       <router-link v-for="(elem, ind) in elem" :key="ind" 
        :to="{ name:  elem.nombre }" 
        class="md:w-full md:mx-10  md:text-center md:py-2 text-white md:text-gray-600 md:hover:text-black transition duration-500 ease-in-out "
        active-class="border-white border-b-2 border-solid md:border-blue md:text-black "
        >
          <p 
          class="text-xs md:text-sm lg:text-base 3xl:text-2xl 3xl:mx-10 4xl:text-4xl 
          text-center font-medium  font-mukta tracking-tighter md:tracking-normal w200 md:w600
          ">
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