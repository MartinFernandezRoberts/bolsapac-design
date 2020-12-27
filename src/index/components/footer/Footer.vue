<template>
<div class=" fixed bg-green inset-x-0 bottom-0" id="foot">
  <div class=" absolute ">
    <Left class="w-30 h-30"
    />
    <Right class="w-30 h-30"
    />
  </div>
</div>
</template>

<script>

import Left from './Left'
import Right from './Right'

export default {
    name:'Footer',
    components:{
        Left,
        Right
    }
}
</script>

<style scoped>
  #foot{
    height: 70px; width:100vw;
  }
</style>