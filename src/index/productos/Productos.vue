<template>
    <ul id="array">
        <li class="text-sm text-right" v-for="item in items" v-bind:key="item">
                
                    {{ item.nombre }}
                
            <span class="text-xs"> 
                
                    {{ item.detalle }}
                
            </span>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Productos',
    data() {
      return {
        items: [
            {nombre:'BOLSAS POUNCH ', detalle:'IMPRESAS/AL VACÍO'},
            {nombre:'BOLSA POUNCH'},
            {nombre:'BOLSA SELLO CÓNICO'},
            {nombre:'FILMS PARA ENVASADO'},
            {nombre:'BOLSAS RETAIL ', detalle:'COMPOSTABLE/BOUTIQUE'},
            {nombre:'BOLSAS COURIER ', detalle:'POLIETILENO NO PETRÓLEO/COMPOSTABLE'},
            {nombre:'BOLSAS MANILLA TROQUEL Y TIPO SOBRE'},
            {nombre:'BOLSAS WICKET PESO ESPECÍFICO'},
            {nombre:'BOLSAS PACK PROMOCIÓN'},
            {nombre:'BOLSAS TERMORETRÁCTILES'},
            {nombre:'BOLSAS MOCHILA CON CORDÓN'},
        ]
      }
    }
}
</script>

