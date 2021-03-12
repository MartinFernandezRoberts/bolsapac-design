<template>
<div class="md:w-96">
    <ul class="2xl:mt-10 md:pt-10 mt-1 pt-1" id="array">
        <li class="2xl:mt-1 2xl:text-lg 2xl:pl-10 md:text-left md:pl-12 text-sm text-right font-mukta w800" v-for="item in items" :key="item">
            
                <a :href="'/'+traerImagenes(item)">
                    {{ item.nombre }}
                
                
            <span class="2xl:text-lg text-xs font-mukta w200"> 
                
                    {{ item.detalle }}
                
            </span>
            </a>
        </li>
    </ul>
</div>
</template>

<script>

export default {
    name: 'Productos',
    data() {
      return {
        items: [
            {nombre:'BOLSAS POUNCH', detalle:' IMPRESAS/AL VACÍO', imagenes:['1.png','2.png']},
            {nombre:'BOLSA POUNCH', detalle:'', imagenes:['3.png','4.png']},
            {nombre:'BOLSA SELLO CÓNICO', detalle:'', imagenes:['1.png','2.png']},
            {nombre:'FILMS PARA ENVASADO', detalle:'', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS RETAIL', detalle:' COMPOSTABLE/BOUTIQUE', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS COURIER', detalle:' POLIETILENO NO PETRÓLEO/COMPOSTABLE', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS MANILLA TROQUEL Y TIPO SOBRE', detalle:'', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS WICKET PESO ESPECÍFICO', detalle:'', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS PACK PROMOCIÓN', detalle:'', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS TERMORETRÁCTILES', detalle:'', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS MOCHILA CON CORDÓN', detalle:'', imagenes:['1.png','2.png']},
        ]
      }
    },
    methods: {
        traerImagenes(item){
            
            let q=`?nombre=${item.nombre}`           
            item.imagenes.forEach(imagen=>{
                q+=`&imagenes=${imagen}`
            })

            return q;
        },


    },
}
</script>

<style scoped>
    #array{
         height: 209px;
    }
</style>

