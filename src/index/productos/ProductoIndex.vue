
<template>
  <div id="produktoindecs">
      {{ query }}
      <img v-for="imagen in query.imagenes" :key="imagen"  :src="require('@/assets/img/productos/'+imagen)" alt="ME CARGUÉ AUTOMÁGICAMENTE PQ SOI CUL">
      
  </div>

</template>

<script>
import { useRoute } from 'vue-router'

export default {
    name: 'ProductoIndex',
    data(){
        return {
            query: useRoute().query
        }
    }
}
</script> 

