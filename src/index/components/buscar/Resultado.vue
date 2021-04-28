<template>
  <ul>
      <li v-for="(prod, ind) in prod" :key="ind">
          {{ prod.nombre }}
      </li>
  </ul>
</template>

<script>
import { computed } from 'vue'
export default {
    name: 'Resultado',
    props: ['serch'],
    data() {
        return{
            filtrado: computed.filtrado()
        }
    }, 
}
</script>