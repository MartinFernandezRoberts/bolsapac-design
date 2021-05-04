<template>
 
<div class="md:w-96">
    <ul class="4xl:mt-16 3xl:mt-8 2xl:mt-4 md:pt-3 md:mt-1 pt-1 "  id="array">
        <li 
            class="4xl:mt-6  3xl:mt-1 3xl:text-xl 3xl:pl-10 2xl:mt-1 2xl:text-base 4xl:text-3xl 
                    md:text-left md:pl-12 md:pt-1 
                    text-sm text-right font-mukta w800 text-gray-700 hover:text-black" 
            v-for="(prod) in filtrado" :key="prod.ind"
        >
             <router-link 
                active-class="border-blue border-b border-double md:border-solid md:border-b-0 md:border-l-2 text-black "
                :to="{ name: 'producto', 
                    params: { ...prod }
                }"
             >
                {{ prod.nombre }}

                <span class="md:hidden text-xs font-mukta w200"> 
                    {{ prod.detalle }}
                </span>

                <h1 class="hidden md:block -mt-1 text-sm 4xl:text-2xl font-mukta w200">
                    {{ prod.detalle }}
                </h1>
             
             </router-link>
        </li>
    </ul>
</div>
      
</template>

<script>
  
 export default {
    name: 'Productos',
    props: ['serch'],
    data() {    
        return {
            isActive: true,
            prod: [
                { nombre:'BOLSAS POUNCH', ind:0, desc:'Bolsas pounch impresas al vacío, adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:' IMPRESAS/AL VACÍO', imagenes:['1.png','2.png']},
                { nombre:'BOLSA POUNCH', ind:1, desc:'Bolsas pounch, adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:'', imagenes:['3.png','4.png']},
                { nombre:'BOLSA SELLO CÓNICO', ind:2, desc:'Bolsa sello cónico, adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:'', imagenes:['5.png','6.png']},
                { nombre:'FILMS PARA ENVASADO', ind:3, desc:'Films para envasado, adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:'', imagenes:['7.png','8.png']},
                { nombre:'BOLSAS RETAIL', ind:4, desc:'Bolsas retail, adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:' COMPOSTABLE/BOUTIQUE', imagenes:['9.png','10.png']},
                { nombre:'BOLSAS COURIER', ind:5, desc:'Bolsas courier, adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:' POLIETILENO NO PETRÓLEO/COMPOSTABLE', imagenes:['1.png','2.png']},
                { nombre:'BOLSAS MANILLA TROQUEL Y TIPO SOBRE', ind:6, desc:'Lorem ipsum dolor sit amet, adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:'', imagenes:['1.png','2.png']},
                { nombre:'BOLSAS WICKET PESO ESPECÍFICO', ind:7, desc:'Lorem ipsum dolor sit amet, adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:'', imagenes:['1.png','2.png']},
                { nombre:'BOLSAS PACK PROMOCIÓN', ind:8, desc:'Lorem ipsum dolor sit amet, adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:'', imagenes:['1.png','2.png']},
                { nombre:'BOLSAS TERMORETRÁCTILES', ind:9, desc:'Lorem ipsum dolor sit amet, adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:'', imagenes:['1.png','2.png']},
                { nombre:'BOLSAS MOCHILA CON CORDÓN', ind:10, desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:'', imagenes:['1.png','2.png']},
            ],
        }
    },
    computed: {
        filtrado() {
            return this.prod.filter(
                prod =>
                    prod.nombre.toUpperCase().includes(this.serch) ||
                    prod.desc.toUpperCase().includes(this.serch) ||
                    prod.detalle.toUpperCase().includes(this.serch)
            );
        }
    }
}

</script>