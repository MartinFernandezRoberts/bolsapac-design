import { createApp } from 'vue'
import Index from './Index.vue'
import '../assets/styles.css'
import { createRouter, createWebHistory } from 'vue-router'
import Somos from './components/somos/Somos'
import Sustentabilidad from './components/sustentabilidad/Sustentabilidad'
import Procesos from './components/procesos/Procesos'
import Contacto from './components/contacto/Contacto'
import ProductoIndex from './productos/ProductoIndex'
import Portada from './components/portada/Portada'
import { createStore } from 'vuex'

const routes = [
    { path: '/', component: Portada },
    { path: '/prod', component: ProductoIndex },
    { path: '/somos', component: Somos },
    { path: '/sustentabilidad', component: Sustentabilidad },
    { path: '/procesos', component: Procesos },
    { path: '/contacto', component: Contacto },
]

const router = createRouter({
    history: createWebHistory(),
    routes // short for `routes: routes`
  })

const store = createStore({
  state:{
      items: [
            {nombre:'BOLSAS POUNCH', ind:0, desc:'Bolsas pounch impresas al vacío, consectetur adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:' IMPRESAS/AL VACÍO', imagenes:['1.png','2.png']},
            {nombre:'BOLSA POUNCH', ind:1, desc:'Bolsas pounch, consectetur adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:'', imagenes:['3.png','4.png']},
            {nombre:'BOLSA SELLO CÓNICO', ind:2, desc:'Bolsa sello cónico, consectetur adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:'', imagenes:['5.png','6.png']},
            {nombre:'FILMS PARA ENVASADO', ind:3, desc:'Films para envasado, consectetur adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:'', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS RETAIL', ind:4, desc:'Bolsas retail, consectetur adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:' COMPOSTABLE/BOUTIQUE', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS COURIER', ind:5, desc:'Bolsas courier, consectetur adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:' POLIETILENO NO PETRÓLEO/COMPOSTABLE', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS MANILLA TROQUEL Y TIPO SOBRE', ind:6, desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:'', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS WICKET PESO ESPECÍFICO', ind:7, desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:'', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS PACK PROMOCIÓN', ind:8, desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:'', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS TERMORETRÁCTILES', ind:9, desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:'', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS MOCHILA CON CORDÓN', ind:10, desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iure quidem impedit consequuntur voluptate nisi distinctio magni, illum numquam cum vel eveniet tenetur, temporibus facilis in vero. Consequatur, eius molestias.', detalle:'', imagenes:['1.png','2.png']},
        ]
  },
  getters: {
    getItemById: (state) => (ind) => {
      return state.items.find(item => item.ind == ind)
    }
  }
  
})


createApp(Index).use(store).use(router).mount('#index')