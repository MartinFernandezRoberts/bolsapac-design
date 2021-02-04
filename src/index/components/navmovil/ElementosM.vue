<template>
  <div  @click="$emit('pagSecundaria')">
      <div class="flex flex-col items-center bg-blue pt-6 pb-3 space-y-14" id="mov">
        <router-link to="/somos" class="" >
          <p class="text-xs text-center font-medium text-white font-mukta w200 tracking-tighter">
            SOMOS
          </p>
        </router-link>

        <router-link to="/sustentabilidad" class="">
          <p class="text-xs text-center font-medium text-white font-mukta w200 tracking-tighter">
            SUSTENTABILIDAD
          </p>
        </router-link>

        <router-link to="/procesos" class="">
          <p class="text-xs text-center font-medium text-white font-mukta w200 tracking-tighter">
            PROCESOS
          </p>
        </router-link>

        <router-link to="/contacto" class="">
          <p class="text-xs text-center font-medium text-white font-mukta w200 tracking-tighter">
            CONTACTO
          </p>
        </router-link>

      </div>

  </div>
</template>

<script>
export default {
    name: 'ElementosM'
}
</script>

<style scoped>
  #mov{
    height: 287px; width:80px;
  }
</style>