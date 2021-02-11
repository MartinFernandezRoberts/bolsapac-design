<template>
<div>
    <ul class="mt-1 pt-1" id="array">
        <li class="text-sm text-right font-mukta w800 " v-for="item in items" v-bind:key="item">
                <a :href="traerImagenes(item)">
                    {{ item.nombre }}
                </a>
            <span class="text-xs font-mukta w200"> 
                
                    {{ item.detalle }}
                
            </span>
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
            {nombre:'BOLSAS POUNCH', detalle:'IMPRESAS/AL VACÍO', imagenes:['1.png','2.png']},
            {nombre:'BOLSA POUNCH', imagenes:['3.png','4.png']},
            {nombre:'BOLSA SELLO CÓNICO', imagenes:['1.png','2.png']},
            {nombre:'FILMS PARA ENVASADO', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS RETAIL ', detalle:'COMPOSTABLE/BOUTIQUE', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS COURIER ', detalle:'POLIETILENO NO PETRÓLEO/COMPOSTABLE', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS MANILLA TROQUEL Y TIPO SOBRE', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS WICKET PESO ESPECÍFICO', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS PACK PROMOCIÓN', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS TERMORETRÁCTILES', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS MOCHILA CON CORDÓN', imagenes:['1.png','2.png']},
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
        }

    },
}
</script>

<style scoped>
    #array{
         height: 209px;
    }
</style>

