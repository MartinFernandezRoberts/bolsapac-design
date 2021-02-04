
<template>
  <div id="produktoindecs">
      {{ query }}
      <img v-for="imagen in query.imagenes" :key="imagen" :src="'../../assets/img/productos/'+imagen" alt="">
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