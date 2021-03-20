import { createApp } from 'vue'
import Index from './Index.vue'
import '../assets/styles.css'
import { createRouter, createWebHistory } from 'vue-router'
import Somos from './components/somos/Somos'
import Sustentabilidad from './components/sustentabilidad/Sustentabilidad'
import Procesos from './components/procesos/Procesos'
import Contacto from './components/contacto/Contacto'
import ProductoIndex from './productos/ProductoIndex'
import { createStore } from 'vuex'

const routes = [
    { path: '/', component: ProductoIndex },
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
            {nombre:'BOLSAS POUNCH', ind:0, detalle:' IMPRESAS/AL VACÍO', imagenes:['1.png','2.png']},
            {nombre:'BOLSA POUNCH', ind:1, detalle:'', imagenes:['3.png','4.png']},
            {nombre:'BOLSA SELLO CÓNICO', ind:2, detalle:'', imagenes:['5.png','6.png']},
            {nombre:'FILMS PARA ENVASADO', ind:3, detalle:'', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS RETAIL', ind:4, detalle:' COMPOSTABLE/BOUTIQUE', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS COURIER', ind:5, detalle:' POLIETILENO NO PETRÓLEO/COMPOSTABLE', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS MANILLA TROQUEL Y TIPO SOBRE', ind:6, detalle:'', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS WICKET PESO ESPECÍFICO', ind:7, detalle:'', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS PACK PROMOCIÓN', ind:8, detalle:'', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS TERMORETRÁCTILES', ind:9, detalle:'', imagenes:['1.png','2.png']},
            {nombre:'BOLSAS MOCHILA CON CORDÓN', ind:10, detalle:'', imagenes:['1.png','2.png']},
        ]
  },
  getters: {
    getItemById: (state) => (id) => {
      return state.items.find(item => item.ind == id)
    }
  }
  
})


createApp(Index).use(store).use(router).mount('#index')