<template>
<div class="md:w-96">
    <ul class="2xl:mt-8 md:pt-3 mt-1 pt-1" id="array">
        <li class="2xl:mt-1 2xl:text-lg 2xl:pl-10 md:text-left md:pl-12 md:pt-1 text-sm text-right font-mukta w800" v-for="(item, index) in items" :key="index">
             <router-link 
             :to="'/prod'+ruta(item)"
             >
             
                {{ item.nombre }}

                <span class="md:hidden text-xs font-mukta w200"> 
                    {{ item.detalle }}
                </span>

                <h1 class="hidden md:block -mt-1 text-sm font-mukta w200">
                    {{ item.detalle }}
                </h1>
             
             </router-link>
        </li>
    </ul>
</div>
</template>

<script>

export default {
    name: 'Productos',
    methods: {
        ruta(item){
            let q=`?ind=${item.ind}`
            return q;
        },
    },
    computed: {
        items() {
            return this.$store.state.items
        }
    },
}
</script>

<style scoped>
    #array{
         height: 209px;
    }
</style>

